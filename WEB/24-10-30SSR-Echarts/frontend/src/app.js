document.addEventListener('DOMContentLoaded',()=>{
    const fetchFun = async ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                let data = {
                    message: 'Hello from CSR'
                }
                resolve(data)
            }, 1000);
        })
    }
    fetchFun().then((data)=>{
        let divDom = document.getElementById('app');
        divDom.innerHTML = `
            <h1>${data.message}</h1>
            <p>csr相关内容</p>
        `
    })
})