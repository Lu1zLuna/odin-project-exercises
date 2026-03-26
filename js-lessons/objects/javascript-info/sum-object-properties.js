  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  
  function multiplyNumeric(obj) {
    /* your code */
    let multiple = 0;
    for (let key in obj) {
      if (typeof key === "number") {
        obj[key] *= 2
      }
    }
  }
  
  multiplyNumeric(menu);
  
 console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );