let count = 0;document.getElementById('decrease').addEventListener('click', () => {
    count--;
    updateDisplay();
});document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    updateDisplay();
});document.getElementById('increase').addEventListener('click', () => {
    count++;
    updateDisplay();
});function updateDisplay() {
    document.getElementById('count').innerText = count;
}