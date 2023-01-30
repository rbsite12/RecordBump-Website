function expandNav(){
    let ham = document.getElementById('ham');
    let open = document.getElementById('open');
    let close = document.getElementById('close');
    if(ham.style.display=="none"){
        ham.style.display = "block";
        open.style.display = "none";
        close.style.display = "block";
    }
    else{
        ham.style.display = "none";
        close.style.display = "none";
        open.style.display = "block";
    }
}

function expandFaq(ids, arr){
    let expElement = document.getElementById(ids);
    const propertyValues = Object.values(expElement.classList);
    let arrowClass = document.getElementById(arr).classList;

    
    if(propertyValues.includes("hidden")){
        expElement.classList.remove("hidden");
        expElement.classList.add("block");
        arrowClass.add("fa-arrow-alt-circle-up");
        arrowClass.remove("fa-arrow-alt-circle-down");

    }
    else if(propertyValues.includes("hidden") == false || propertyValues.includes("block")){
        expElement.classList.remove("block");
        expElement.classList.add("hidden");
        arrowClass.add("fa-arrow-alt-circle-down");
        arrowClass.remove("fa-arrow-alt-circle-up");
    }
}