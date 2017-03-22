function tryToNovate(){
	if(document.getElementsByClassName("yt-ui-menu-item yt-uix-menu-close-on-select comment-section-sort-menu-item yt-uix-sessionlink").length == 2){
		document.getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-menu-trigger")[0].click();
		document.getElementsByClassName("yt-ui-menu-item yt-uix-menu-close-on-select comment-section-sort-menu-item yt-uix-sessionlink")[1].click();
	}
	setTimeout(tryToNovate,1000);
}
tryToNovate();
