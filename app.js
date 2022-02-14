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
}
// product case-plus button
document.getElementById("case-plus").addEventListener("click",function(){
    updateProductNumber("case",59,true);
});
// product case-minus button
document.getElementById("case-minus").addEventListener("click",function(){
    updateProductNumber("case",59,false);
});
// product phone-plus button
document.getElementById("phone-plus").addEventListener("click",function(){
    console.log("clicked phone-plus button");
    updateProductNumber("phone",1219,true);
});
// product phone-minus button
document.getElementById("phone-minus").addEventListener("click",function(){
    console.log("clicked phone-minus button");
    updateProductNumber("phone",1219,false);
});