document.getElementById("case-plus").addEventListener("click",function(){
    console.log("clicked case plus button.");
    const caseInput = document.getElementById("case-number");
    const caseNumber = caseInput.value;
    caseInput.value =parseInt(caseNumber)+ 1;
});

document.getElementById("case-minus").addEventListener("click",function(){
    console.log("clicked case-minus button ");
    const caseInput = document.getElementById("case-number");
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber)-1;
})