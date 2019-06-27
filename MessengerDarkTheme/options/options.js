function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    colBackground: document.querySelector("#colBackground").value,
    colText: document.querySelector("#colText").value,
    colDark: document.querySelector("#colDark").value,
    colLight: document.querySelector("#colLight").value
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#colBackground").value  = result.colBackground  || "#222222";
    document.querySelector("#colText").value        = result.colText        || "#efefef";
    document.querySelector("#colDark").value        = result.colDark        || "#1a1a1a";
    document.querySelector("#colLight").value       = result.colLight       || "#404040";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get();
  getting.then(setCurrentChoice, onError);
}

function resetOptions() {
  document.querySelector("#colBackground").value  = "#222222";
  document.querySelector("#colText").value        = "#efefef";
  document.querySelector("#colDark").value        = "#1a1a1a";
  document.querySelector("#colLight").value       = "#404040";
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.getElementById("resetbtn").addEventListener("click", resetOptions);
document.getElementById("revertbtn").addEventListener("click", restoreOptions);
