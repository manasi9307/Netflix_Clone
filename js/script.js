const tabItems=document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

//Select Item
function selectItem(e){
removeBorder();
removeContent();
    this.classList.add('tab-border');
    console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function showContent(e){

    this.classList.add('show');
}

function removeContent(){
    tabContentItem.forEach(content => content.classList.remove('show'))
}
//Listen for a tab click
tabItems.forEach(item => {
item.addEventListener("click",selectItem)
});



