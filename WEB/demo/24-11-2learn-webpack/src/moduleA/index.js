import "./style.scss";

export const moduleA = () => {
    const app = document.createElement('div');
    app.setAttribute('id', 'app')
    app.setAttribute('class', "moduleA")
    document.body.append(app);
    document.getElementById('app').innerHTML = '模块化A'
    // document.body.innerHTML = `<div class="${style.container}">Hello, CSS Modules!</div>`;
}


