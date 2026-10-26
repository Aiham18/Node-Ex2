// ראיד חוגיראת + איהם סבתאן

for (let num = 2; num < 237; num++) {
    let isPrime = true;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}