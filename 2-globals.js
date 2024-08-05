// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module
// process - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
    console.log('hello world');
}, 1000)

// go to previous command in the VScode terminal - arrow up
// node app = node app.js