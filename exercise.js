// დავალება 1.
function mySetTimeout(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(); 
      }, delay);
    });
  }
  
  // test
  console.log("Start");
  mySetTimeout(2000).then(() => {
    console.log("After 2 seconds");
  });
  
//   დავალება 2
  function makeToy(makeTime) {
    return mySetTimeout(makeTime);
  }
  
  function deliverToys(deliveryTime) {
    return mySetTimeout(deliveryTime);
  }
  
  function sellToy(sellTime) {
    return mySetTimeout(sellTime);
  }
  
  async function toyShopProcess() {
    console.log("Start making a toy...");
    await makeToy(3000); // Making a toy takes 3 seconds
    
    console.log("Toy made. Initiating delivery...");
    await deliverToys(2000); // Delivery takes 2 seconds
    
    console.log("Toys delivered. Selling the toy...");
    await sellToy(1000); // Selling a toy takes 1 second
    
    console.log("Toy sold successfully!");
  }
  
  // Initiating the toy shop process
  toyShopProcess().catch((error) => {
    console.error("Error in the toy shop process:", error);
  });
  
