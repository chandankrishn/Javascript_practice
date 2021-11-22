function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uppercaseString(s) {
    await sleep(500);
    return s.toUpperCase();
    
    // your code goes here
}

uppercaseString("edward").then(console.log);
