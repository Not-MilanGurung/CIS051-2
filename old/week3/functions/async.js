const findPrimes = async () => {
    let primes = [];
    for (let i = 2; i <= 1_000; i++){
        let prime = true;
        for (let j = 2; j <= (i/2); j++){
            if (i % j == 0){
                prime = false;
                break;
            }
        }
        if (prime){
            primes.push(i);
        }
    }
    return primes;
}

const printPrimes = async () => {
    const out = await findPrimes();
    console.log(out);
}

printPrimes();