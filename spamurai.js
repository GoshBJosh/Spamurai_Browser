let numOfAds = document.querySelectorAll('iframe').length;

for(var i=0; i< numOfAds; i++) {

	let thisIframe = document.querySelectorAll('iframe')[i];

	if(thisIframe.id.indexOf('google_ads')> -1){
		thisIframe.style.display = 'none';
	}
}
