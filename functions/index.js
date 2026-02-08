let greet = (name, callback) =>{
    callback();
    console.log(`Hello ${name}`);
}

const formatting = () => {
    console.log("=".repeat(10));
}

greet('Sean', formatting);

const prom =  new Promise((success, fail) => {
    if (true){
        success();
    } else {
        fail();
    }
});

const f1 = () => console.log("Successful");
const f2 = () => console.log("Failure");

prom.then(f1, f2);