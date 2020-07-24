
// add items using plus for mobile

const increaseItem = document.getElementById("addItem1");
increaseItem.addEventListener("click",function(){
    const addItem = document.getElementById("value1").value;
    const currentItem = parseFloat(addItem);
    const totalItem = currentItem + 1 ; 
    document.getElementById("value1").value = totalItem ;

    increaseItem("price1",totalItem);
    increaseItem("subTotal",totalItem);
    increaseItem("total",totalItem);

    function increaseItem(id,totalItem){
    const increasePrice = document.getElementById(id).innerText;
    const currentPrice = parseFloat(increasePrice);
    const totalPrice = totalItem * 1219 ;
    document.getElementById(id).innerText = totalPrice ;
    }
})

// minus items using minus for mobile

const decreaseItem = document.getElementById("lessItem1");
decreaseItem.addEventListener("click",function(){
    const lessItem = document.getElementById("value1").value;
    const currentItem = parseFloat(lessItem);
    const totalItem = currentItem - 1 ;
    document.getElementById("value1").value = totalItem ;

    decreaseItem("price1", totalItem);
    decreaseItem("subTotal", totalItem);
    decreaseItem("total", totalItem); 
    
    if (totalItem <= 0) {
        document.getElementById("value1").value = 0;
        document.getElementById("price1").innerText = 0 ;
        document.getElementById("subTotal").innerText = 0 ;
        document.getElementById("total").innerText = 0 ;
       
    }

    function decreaseItem(id,totalItem){
        const decreasePrice = document.getElementById(id).innerText;
        const currentPrice = parseFloat(decreasePrice);
        const totalPrice = totalItem * 1219 ;
        document.getElementById(id).innerText = totalPrice ;
    } 
})

// add items using plus for case




