const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("response", (name, id) => {
    console.log(`date recieved ${name} with id: ${id}`);
})

customEmitter.on("response", () => {
    console.log(`some other logic `);
})

customEmitter.emit("response", "john", 34)