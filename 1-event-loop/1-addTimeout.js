console.log("first");

setTimeout(() => {
    console.log("second");
}, 0);

console.log("third");

/* 
The setTimeout will run after every other 
line was run has run successfully to avoid the 
collision between console.log
*/