(function(){
  document.addEventListener('DOMContentLoaded', function() {
    var lorBtn = document.getElementById('lor-btn'),
        dlBtn = document.getElementById('dl-btn');

    lorBtn.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {
        var currentTabUrl = tab.url;

        if (currentTabUrl && currentTabUrl.indexOf("youtube.com") > 0) {
          chrome.tabs.update(tab.id, { url: currentTabUrl.replace("youtube", "listenonrepeat") });
        } else if (currentTabUrl && currentTabUrl.indexOf("listenonrepeat.com") > 0) {
          chrome.tabs.update(tab.id, { url: currentTabUrl.replace("listenonrepeat", "youtube") });
        }
        window.close();
      });
    }, false);

    dlBtn.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {
        var currentTabUrl = tab.url;

        chrome.tabs.onUpdated.addListener(function () {
          var code = 'var currentTab = ' + JSON.stringify({url:currentTabUrl}),
              currTab = arguments[2],
              tabId = arguments[0];

          if(currTab && currTab.url && currTab.url.indexOf('youtube-mp3.org') > -1){
            chrome.tabs.executeScript(tabId, { code: code }, function() {
                chrome.tabs.executeScript(tabId, { file: 'download.js' });
            });
          }
        }, false);

        if (currentTabUrl && currentTabUrl.indexOf("youtube.com") > 0) {
          chrome.tabs.update(tab.id, {url: 'http://www.youtube-mp3.org/'});
        } else if (currentTabUrl && currentTabUrl.indexOf("youtube-mp3.org") > 0) {
          chrome.tabs.executeScript(tab.id, { file: 'goBack.js' });
        } else {
          window.close();
        }
      });
    }, false);
  }, false);
})();