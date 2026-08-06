function printCountdown(num) {
  if (num <= 0) {
    return;
  }

  console.log(num);

  printCountdown(num - 1);
}

printCountdown(5);