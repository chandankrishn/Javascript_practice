function sleep(ms,x,y) {
    return new Promise((resolve,reject) => setTimeout(
        ()=>{
             if(x<0 || y<0)
    		{
      		  reject("few values were smaller than 0");
    		}
        else
        {
        resolve( x+y);
                       
           
        }
                       }
        , ms));
}

async function sumAsync(x, y) {
    
   return  await sleep(500,x,y);
   
}

// sumAsync is an async function, which means it returns a Promise.
sumAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);
}).catch((error)=>{ console.log("request rejceted",error) });
