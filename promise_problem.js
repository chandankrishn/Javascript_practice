function sumAsync(x) {
    console.log("1. sumAsync is executed");        console.log(x);
            console.log(x);
    const p = new Promise((resolve, reject) => {

        if(x==null || abc=='')
        {
         reject("The string you have entered is NULL");
    	}
        else 
      	{	
            resolve(x.toUpperCase());
		} 
                          
    });
    
        
        
    return p;
}

// let's use the function now
sumAsync(null).then((result) => {
    console.log("5. The result of the addition is:", result);
    }).catch((error) => {console.log("Error recieved",error);
    });
        
