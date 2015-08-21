(function(){
	var dlInterval = null,
		dlLink = '',
		dLinks = [],
		form = document.getElementById('submit-form'),
		input = document.getElementById('youtube-url'),
		sbt = document.getElementById('submit');
	input.value = currentTab.url;
	sbt.click();

	dlInterval ? window.clearInterval(dlInterval) : null;
	dlInterval = window.setInterval(function(){
		dlLink = document.getElementById('dl_link');
		dLinks = dlLink.getElementsByTagName('a');
		for (var i = 0; i < dLinks.length; i++) {
			dLinks[i].style.display != 'none' ? dLinks[i].click() : null;
			window.clearInterval(dlInterval);
		};
	},1000);
})();