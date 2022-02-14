function updateProductNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product+"-number");
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber =parseInt(productNumber)+ 1;
    }
    else if(productNumber > 0){
        productNumber= parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product-total
    const productTotal = document.getElementById(product+"-total");
    productTotal.innerText = productNumber * price;
    // update calculate total
    calculateTotal();
    
}
function getInputValue(product){
    const productInput = document.getElementById(product+"-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){  
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal /10;
    const totalPrice = subtotal + tax ;
    // update on the html subtotal
    document.getElementById("sub-total").innerText =subtotal;
    document.getElementById("tax-amount").innerText =tax;
    document.getElementById("total-price").innerText =totalPrice;
}
// product phone-plus button
document.getElementById("phone-plus").addEventListener("click",function(){
    updateProductNumber("phone",1219,true);
});
// product phone-minus button
document.getElementById("phone-minus").addEventListener("click",function(){
    updateProductNumber("phone",1219,false);
});
// product case-plus button
document.getElementById("case-plus").addEventListener("click",function(){
    updateProductNumber("case",59,true);
});
// product case-minus button
document.getElementById("case-minus").addEventListener("click",function(){
    updateProductNumber("case",59,false);
    
});
