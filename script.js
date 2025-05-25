document.getElementById('btn').addEventListener('click', function() {
    alert(`Button clicked!`);
    document.getElementById('message').textContent = "تم الضغط على الزر!";
    this.style.backgroundColor = 'lightblue';
    this.disabled = true;
});
