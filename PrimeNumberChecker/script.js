function cPrime(){
    const n=parseInt(document.getElementById('input').value);
    const res=document.getElementById('result');
    if(isNaN(n) || n<=1){
        res.textContent="Please enter number greater than 1";
        res.style.color="red";
        return;
    }
    let count=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count++;
        }
    }
    if(count==2){
        res.textContent=`${n} is a prime number`;
        res.style.color="orange";
        
    }
    else{
         res.textContent=`${n} is not a prime number`;
        res.style.color="yellow";
    }

}