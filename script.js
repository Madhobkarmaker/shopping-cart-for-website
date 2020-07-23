
// add items using plus

const increaseItem = document.getElementById("addItem1");
increaseItem.addEventListener("click",function(){
    const addItem = document.getElementById("value1").value;
    const currentItem1 = parseFloat(addItem);
    const totalItem1 = currentItem1 + 1 ; 
    document.getElementById("value1").value = totalItem1 ;

    const increasePrice1 = document.getElementById("price1").innerText;
    const currentPrice1 = parseFloat(increasePrice1);
    const totalMobilePrice = totalItem1 * 1219 ;
    document.getElementById("price1").innerText = totalMobilePrice ;

})

// minus items using minus

const decreaseItem = document.getElementById("lessItem1");
decreaseItem.addEventListener("click",function(){
    const lessItem = document.getElementById("value1").value;
    const currentItem2 = parseFloat(lessItem);
    const totalItem2 = currentItem2 - 1 ;
    document.getElementById("value1").value = totalItem2 ;

    const decreasePrice = document.getElementById("price1").innerText;
    const currentPrice2 = parseFloat(decreasePrice);
    const totalMobilePrice = totalItem2 * 1219 ;
    document.getElementById("price1").innerText = totalMobilePrice ;

    if (totalItem2 < 0) {
        document.getElementById("value1").value = 0;
        document.getElementById("price1").innerText = 0 ;
       
    }
})
