function tryToNovate(){
	try{
		var newButton = document.querySelector('[data-menu_name="newest-first"]');
		var selectButton = document.getElementsByClassName("comment-section-sort-menu")[0].children[0];
		if(newButton.children[0].innerHTML != selectButton.children[0].innerHTML){
			newButton.click();
			selectButton.click();
			newButton.click();
		}
	}catch(error){}
	setTimeout(tryToNovate,1000);
}
tryToNovate();
