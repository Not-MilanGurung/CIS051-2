function counter() {
    let counter = 0;
    return () =>{
        counter++;
        console.log(counter);
        return counter;
    }
}

const count = counter();
count();
count();
count();
