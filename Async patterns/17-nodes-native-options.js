const { readFile, writeFile } = require("fs").promises
const util = require("util");
// const readFilePromise = util.promisify(readFile); // this step can be skipped using ".promises"
// const writeFilePromise = util.promisify(writeFile); // ...

const start = async () => {
    try {
        const first = await readFile("./content/first.txt", "utf8")
        const second = await readFile("./content/second.txt", "utf8")
        await writeFile("./content/result-mind-grenade.txt", `This is awesome: ${first}. ${second}`, { flag: "a" }
        )
        console.log(first, second)
    } catch (error) {
        console.log(error);
    }
}

start()