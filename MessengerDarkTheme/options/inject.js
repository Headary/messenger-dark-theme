function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    var colBackground = "#222222";
    if (item.colBackground) {
        colBackground = item.colBackground;
    }
    var colTextPrim = "#efefef";
    if (item.colTextPrim) {
        colTextPrim = item.colTextPrim;
    }
    var colTextSec = "#bcbcbc";
    if (item.colTextSec) {
        colTextSec = item.colTextSec;
    }
    var colTextDark = "#222222";
    if (item.colTextDark) {
        colTextDark = item.colTextDark;
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
    document.documentElement.style.setProperty('--color-text', colTextPrim);
    document.documentElement.style.setProperty('--color-text-primary', colTextPrim);
    document.documentElement.style.setProperty('--color-text-secondary', colTextSec);
    document.documentElement.style.setProperty('--color-textdark', colTextDark);
    document.documentElement.style.setProperty('--color-darkspot', colDark);
    document.documentElement.style.setProperty('--color-highlight', colLight);

    // Color options

    // var oppTextCol = [];
    // if (item.oppTextCol) {
    //     oppTextCol = item.oppTextCol;
    // }

    // var style = '';
    // for (let i = 0; i < oppTextCol.length; i++) {
    //     let attr = oppTextCol[i];
    //     style += `
    //   ._3058._ui9._hh7[style*="` + attr + `"] > ._aok > ._3oh-,
    //   ._3058._ui9._hh7[style*="` + attr + `"] > ._aok > ._3oh- > a,
    //   ._3058._ui9._hh7[style*="` + attr + `"] > ._aok > ._3oh- > * > ._3oh-,
    //   ._3058._ui9._hh7[style*="` + attr + `"] [style*="color: rgb(255, 255, 255);"],
    //   ._3058._ui9._hh7[style*="` + attr + `"] ._pye,
    //   ._3058._ui9._hh7[style*="` + attr + `"] > ._4pcn {
    //     color: var(--color-textdark) !important;
    //   }
    //   ._3058._ui9._hh7[style*="` + attr + `"] ._pye ._pyf {
    //     background-color: var(--color-textdark) !important;
    //   }
    //   ._3058._ui9._hh7[style*="` + attr + `"] > ._4pcn > ._2uf5 {
    //     filter: invert(0.85);
    //   }
    //   `
    // }
    // var styleSheet = document.createElement("style");
    // styleSheet.id = "styleSheet";
    // styleSheet.innerHTML = style;
    // var ref = document.querySelector('script');
    // ref.parentNode.insertBefore(styleSheet, ref);
    // console.log(style);
}

var getting = browser.storage.sync.get();
getting.then(onGot, onError);