function sumAsync(x, y) {
    console.log("1. sumAsync is executed");
    const p = new Promise((resolve, reject) => {
        // run this in 500ms from now
        setTimeout(() => {
            console.log("4. Resolving sumAsync's Promise with the result after 500ms");
        	if(x<0 || y<0)
        	{
        		reject("Negative values recieved");
        
    		}
            resolve(x + y);
        }, 500);

        // we don't need to return anything
        console.log("2. sumAsync Promise is initialized");            
    });
    console.log("3. sumAsync has returned the Promise");
    return p;
}

// let's use the function now
sumAsync(-5, 7).then((result) => {
    console.log("5. The result of the addition is:", result);
    }).catch((error) => {console.log("Error recieved",error);
    });
        
