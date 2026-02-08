function multTable() {
    return new Promise((resolve, reject) => {
        try {
            const out = '';
            for (let i = 1; i < 11; i++){
                out += `Mult table of ${i}\n`;
                for (let j = 1; j < 11; j++){
                    out += `${i} x ${j} = ${i * j}\n`;
                }
                out += '\n';
            }
            resolve(out);
        } catch (e) {
            reject(e);
        }       
    })
}

const outPromise = multTable();
outPromise.then((out) => console.log(out), (e) => console.error(e));
