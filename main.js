const text = document.querySelector('.text');
const target = document.querySelector('.target');
const horizon = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

document.addEventListener('mousemove', (e)=>{
    const x = e.clientX;
    const y = e.clientY;
    text.innerHTML = `${x}px, ${y}px`;
    text.style.top = `${y+10}px`;
    text.style.left = `${x+10}px`;
    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
    horizon.style.top = `${y}px`;
    vertical.style.left = `${x}px`;
})