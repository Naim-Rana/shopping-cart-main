function updateProductNumber(product,isIncreasing){
    const productInput = document.getElementById(product+"-number");
    const productNumber = productInput.value;
    if(isIncreasing == true){
        productInput.value =parseInt(productNumber)+ 1;
    }
    else if(productNumber > 0){
        productInput.value = parseInt(productNumber) - 1;
    }
}
document.getElementById("case-plus").addEventListener("click",function(){
    updateProductNumber("case",true);
});

document.getElementById("case-minus").addEventListener("click",function(){
    updateProductNumber("case",false);
})