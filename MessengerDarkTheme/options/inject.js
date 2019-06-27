function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var colBackground = "#222222";
  if (item.colBackground) {
    colBackground = item.colBackground;
  }
  var colText = "#efefef";
  if (item.colText) {
    colText = item.colText;
  }
  var colDark = "#1a1a1a";
  if (item.colDark) {
    colDark = item.colDark;
  }
  var colLight = "#404040";
  if (item.colLight) {
    colLight = item.colLight;
  }
  document.documentElement.style.setProperty('--color-background', colBackground);
  document.documentElement.style.setProperty('--color-text', colText);
  document.documentElement.style.setProperty('--color-darkspot', colDark);
  document.documentElement.style.setProperty('--color-highlight', colLight);
  console.log(item);
}

var getting = browser.storage.sync.get();
getting.then(onGot, onError);
