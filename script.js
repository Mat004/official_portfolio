// Generic tab switching — works with any data-tab attribute
document.querySelectorAll('.tab-button').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        // Buttons
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Contents
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(`${target}-content`).classList.add('active');
    });
});
