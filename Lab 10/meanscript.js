const Numbers=[12,4,6,9,3];
function looper(){
    document.getElementById("main").innerHTML=Numbers;
}
function loopMean(){
    let sum=0;
    for(let i=0;i<Numbers.length;i++){
        sum+=Numbers[i];
    }
    document.getElementById("mean").innerHTML=sum/Numbers.length;
}
function loopSum(){
    let sum=0;
    for(let i=0;i<Numbers.length;i++){
        sum+=Numbers[i];
    }
    document.getElementById("sum").innerHTML=sum;
}