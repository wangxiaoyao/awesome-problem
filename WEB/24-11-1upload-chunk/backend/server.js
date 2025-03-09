const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), async (req, res) => {
    
    const { chunkIndex, totalChunks, fileName } = req.body;
    const chunkPath = path.join(__dirname, 'uploads', `${fileName}-${chunkIndex}`);
    
    // 保存当前块
    await fs.move(req.file.path, chunkPath);

    // 当所有块都上传完成时，合并文件
    if (parseInt(chunkIndex, 10) + 1 === parseInt(totalChunks, 10)) {
        const finalFilePath = path.join(__dirname, 'uploads', fileName);
        await mergeChunks(finalFilePath, fileName, totalChunks);
        res.send({ message: 'Upload and merge completed' });
    } else {
        res.send({ message: 'Chunk uploaded successfully' });
    }
});

// 合并块文件
async function mergeChunks(finalFilePath, fileName, totalChunks) {
    const writeStream = fs.createWriteStream(finalFilePath);

    for (let i = 0; i < totalChunks; i++) {
        const chunkPath = path.join(__dirname, 'uploads', `${fileName}-${i}`);
        const chunkData = await fs.readFile(chunkPath);
        writeStream.write(chunkData);
        await fs.remove(chunkPath); // 删除已合并的块
    }

    writeStream.end();
}

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
