const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const progressDiv = document.getElementById('progress');

uploadBtn.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
        uploadFileInChunks(file);
    }
});

async function uploadFileInChunks(file) {
    const chunkSize = 1024 * 1024; // 1MB 每块
    const totalChunks = Math.ceil(file.size / chunkSize);
    let uploadedChunks = 0;

    for (let start = 0; start < file.size; start += chunkSize) {
        const chunk = file.slice(start, start + chunkSize);
        const chunkIndex = start / chunkSize;

        // 上传每一块
        const formData = new FormData();
        formData.append('file', chunk);
        formData.append('chunkIndex', chunkIndex);
        formData.append('totalChunks', totalChunks);
        formData.append('fileName', file.name);

        try {
            await fetch('/upload', {
                method: 'POST',
                body: formData
            });

            uploadedChunks++;
            const progress = Math.round((uploadedChunks / totalChunks) * 100);
            progressDiv.textContent = `Progress: ${progress}%`;
        } catch (error) {
            console.error('Upload failed', error);
            break;
        }
    }
}
