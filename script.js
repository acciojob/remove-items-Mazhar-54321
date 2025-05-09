document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form1');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const select = document.getElementById('colorSelect');
        const selectedIndex = select.selectedIndex;
        if (selectedIndex === -1) {
            return;
        }
        select.remove(selectedIndex);   
    });
});