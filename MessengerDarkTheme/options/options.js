var chboxes = document.querySelectorAll("#checkboxes > label > input");

function saveOptions(e) {
  let checked = [];
  for (let i = 0; i < chboxes.length; i++) {
    if (chboxes[i].checked) {
      checked.push(chboxes[i].value);
    }
  }

  e.preventDefault();
  browser.storage.sync.set({
    colBackground: document.querySelector("#colBackground").value,
    colText: document.querySelector("#colText").value,
    colTextDark: document.querySelector("#colTextDark").value,
    colDark: document.querySelector("#colDark").value,
    colLight: document.querySelector("#colLight").value,
    oppTextCol: checked
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#colBackground").value = result.colBackground || "#222222";
    document.querySelector("#colText").value = result.colText || "#efefef";
    document.querySelector("#colTextDark").value = result.colTextDark || "#222222";
    document.querySelector("#colDark").value = result.colDark || "#1a1a1a";
    document.querySelector("#colLight").value = result.colLight || "#404040";
    checked = result.oppTextCol || [];
    for (let i = 0; i < chboxes.length; i++) {
      chboxes[i].checked = false;
      for (let j = 0; j < checked.length; j++) {
        if (chboxes[i].value == checked[j]) {
          chboxes[i].checked = true;
        }
      }
    }
    updateElementCol();
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get();
  getting.then(setCurrentChoice, onError);
}

function resetOptions() {
  document.querySelector("#colBackground").value = "#222222";
  document.querySelector("#colText").value = "#efefef";
  document.querySelector("#colTextDark").value = "#222222";
  document.querySelector("#colDark").value = "#1a1a1a";
  document.querySelector("#colLight").value = "#404040";
  for (let i = 0; i < chboxes.length; i++) {
    chboxes[i].checked = false;
  }
  updateElementCol();
}

function updateElementCol() {
  document.documentElement.style.setProperty('--color-background', document.querySelector("#colBackground").value);
  document.documentElement.style.setProperty('--color-text', document.querySelector("#colText").value);
  document.documentElement.style.setProperty('--color-textdark', document.querySelector("#colTextDark").value);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelectorAll("input[type=color]").forEach(input => input.addEventListener("change", updateElementCol));
document.getElementById("savebtn").addEventListener("click", saveOptions);
document.getElementById("resetbtn").addEventListener("click", resetOptions);
document.getElementById("revertbtn").addEventListener("click", restoreOptions);
