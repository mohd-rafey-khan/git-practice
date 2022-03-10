const root = document.getElementById('root');
const X = document.getElementById('X');
const Y = document.getElementById('Y');
root.onmousemove = (e)=>{
    X.textContent = e.clientX;
    Y.innerHTML = e.clientY;
}
root.onmouseout = (e)=>{
    X.innerHTML = "";
    Y.innerHTML = "";
}