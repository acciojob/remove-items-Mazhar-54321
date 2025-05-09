
function removeItem(){
	const select = document.getElementById('colorSelect');
        const selectedIndex = select.selectedIndex;
        if (selectedIndex === -1) {
            return;
        }
        select.remove(selectedIndex); 
}