document.addEventListener('DOMContentLoaded', function() {
  var lorBtn = document.getElementById('lor-btn');
  var dlBtn = document.getElementById('dl-btn');
  lorBtn.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      if (tab.url && tab.url.indexOf("youtube") > 0) {
        chrome.tabs.update(tab.id, {url: tab.url.replace("youtube", "listenonrepeat")});
      }
      window.close();
    });
  }, false);

  dlBtn.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://www.youtube-mp3.org/';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'youtube-url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });  
  }, false);
}, false);