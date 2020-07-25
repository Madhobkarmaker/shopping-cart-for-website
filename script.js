// remove first display and show second display

document.getElementById("checkOut").addEventListener('click',function(){
    document.getElementById("next").style.display ="block";
    document.getElementById("vanish").style.display = "none";

})
// add items using plus for mobileInput

document.getElementById("addItem1").addEventListener("click",function(){
    mobileInput('value1', 'price1', 1259);
    calculateTotal();
})

// minus items using minus for mobileInput

document.getElementById("lessItem1").addEventListener("click",function(){
    mobileCaseInput('value1', 'price1' , 1259);
    calculateTotal();
})

// function for plus

function mobileInput(id1,id2,id3){
    const addItem = document.getElementById(id1).value;
    const currentItem = parseFloat(addItem);
    const totalItem = currentItem + 1 ; 
    document.getElementById(id1).value = totalItem ;

    const mobileInputPrice = document.getElementById(id2).innerText;
    const currentPrice = parseInt(mobileInputPrice);
    const totalPrice= totalItem * id3 ;
    document.getElementById(id2).innerText = totalPrice ;  
}

// function for minus

function mobileCaseInput(id1,id2,id3){
    const addItem = document.getElementById(id1).value;
    const currentItem = parseFloat(addItem);
    const totalItem = currentItem - 1 ; 
    document.getElementById(id1).value = totalItem ;

    const mobileInputPrice = document.getElementById(id2).innerText;
    const currentPrice = parseInt(mobileInputPrice);
    const totalPrice= totalItem* id3 ;
    document.getElementById(id2).innerText = totalPrice ;

    if (totalItem < 0) {
        document.getElementById("value1").value = 0;
        document.getElementById("price1").innerText = 0 ;
        document.getElementById("value2").value = 0;
        document.getElementById("price2").innerText = 0
  }
   
}

// add items using plus for case

document.getElementById("addItem2").addEventListener("click",function(){
    mobileInput('value2', 'price2', 59);
    calculateTotal();   
})

// minus items using minus for case

document.getElementById("lessItem2").addEventListener("click",function(){
    mobileCaseInput('value2','price2', 59)
    calculateTotal();
})

// subtotal,tax,total count

function calculateTotal(){
    const subTotal = (document.getElementById("value1").value * 1259) + 
                      (document.getElementById("value2").value * 59); 

    document.getElementById("subTotal").innerText = subTotal ; 

    const tax = Math.round(subTotal * 0.03);
    document.getElementById("tax").innerText = tax ;

    const totalAmount = subTotal + tax ;
    document.getElementById("total").innerText = totalAmount ;

}

function myFunction() {
   var myObj =  document.getElementById("mobile-item");
    myObj.remove();
}

function myFunction1() {
    var myObj =  document.getElementById("case-item");
     myObj.remove();
 }

  

