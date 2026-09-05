function delayedLog(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

delayedLog("Привіт через 5 секунд", 5000);