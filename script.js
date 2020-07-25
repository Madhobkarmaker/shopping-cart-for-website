// remove first display and show second display

const checkOut = document.getElementById("checkOut");
checkOut.addEventListener('click',function(){
    document.getElementById("next").style.display ="block";
    document.getElementById("vanish").style.display = "none";

})
// add items using plus for mobile

const increaseMobile = document.getElementById("addItem1");
increaseMobile.addEventListener("click",function(){
    const addItem = document.getElementById("value1").value;
    const currentItem = parseInt(addItem);
    const totalItem = currentItem + 1 ; 
    document.getElementById("value1").value = totalItem ;

    const mobilePrice = document.getElementById("price1").innerText;
    const currentPrice = parseInt(mobilePrice);
    const totalPrice= totalItem * 1259 ;
    
    document.getElementById("price1").innerText = totalPrice ;

    calculateTotal();

})

// minus items using minus for mobile

const decreaseMobile = document.getElementById("lessItem1");
decreaseMobile.addEventListener("click",function(){
    const lessItem = document.getElementById("value1").value;
    const currentItem = parseInt(lessItem);
    const totalItem = currentItem - 1 ;
    document.getElementById("value1").value = totalItem ;

    const mobilePrice = document.getElementById("price1").innerText;
    const currentMobilePrice = parseInt(mobilePrice);
    const totalMobilePrice = totalItem * 1259 ;
    document.getElementById("price1").innerText = totalMobilePrice ;

    if (totalItem < 0) {
        document.getElementById("value1").value = 0;
        document.getElementById("price1").value = 0 ;
  }

    calculateTotal();

})

// add items using plus for case

const increaseCase= document.getElementById("addItem2");
increaseCase.addEventListener("click",function(){
    const addItem = document.getElementById("value2").value;
    const currentItem = parseInt(addItem);
    const totalItem = currentItem + 1 ; 
    document.getElementById("value2").value = totalItem ;

    const casePrice = document.getElementById("price2").innerText;
    const currentPrice = parseInt(casePrice);
    const totalPrice= totalItem * 59 ;
    document.getElementById("price2").innerText = totalPrice ;

    calculateTotal();
    
})

// minus items using minus for case

const decreaseCase = document.getElementById("lessItem2");
decreaseCase.addEventListener("click",function(){
    const lessItem = document.getElementById("value2").value;
    const currentItem = parseInt(lessItem);
    const totalItem = currentItem - 1 ;
    document.getElementById("value2").value = totalItem ;

    const casePrice = document.getElementById("price2").innerText;
    const currentPrice = parseInt(casePrice);
    const totalPrice = totalItem * 59 ;
    document.getElementById("price2").innerText = totalPrice ;

    calculateTotal();

})

// subtotal,tax,total count

function calculateTotal(){

     const subTotal =parseInt(document.getElementById("price1").innerText) + 
                      parseInt(document.getElementById("price2").innerText);

    document.getElementById("subTotal").innerText = subTotal ; 

    const tax = Math.round(subTotal * 0.03);
    document.getElementById("tax").innerText = tax ;

    const totalAmount = subTotal + tax ;
    document.getElementById("total").innerText = totalAmount ;

}
