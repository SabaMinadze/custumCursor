document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.addEventListener('mousedown', () => {
    document.querySelector('.custom-cursor').classList.add('active');
});

document.addEventListener('mouseup', () => {
    document.querySelector('.custom-cursor').classList.remove('active');
});