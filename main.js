const text = document.querySelector('.text');
const target = document.querySelector('.target');
const horizon = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeigth = targetRect.height / 2;

document.addEventListener('mousemove', (e)=>{
    const x = e.clientX;
    const y = e.clientY;
    text.innerHTML = `${x}px, ${y}px`;
    text.style.transform = `translate(${x+20}px, ${y+20}px)`;
    target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeigth}px)`;
    horizon.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
})