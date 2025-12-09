function showToast(message){
    let oldtoast=document.querySelector(".toast");
    if(oldtoast){
        oldtoast.remove();
        
    }
     
    let toast=document.createElement("div");
    toast.classList.add("red")
    toast.innerHTML=message;

    document.body.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },1000);
}
document.querySelector(".submit").onclick= () =>{
    showToast("Article submitted ");
};
document.querySelector(".failed").onclick= () =>{
    showToast("oops!failed");
};
document.querySelector(".information").onclick= () =>{
    showToast("so potd");
};
document.querySelector(".warning").onclick= () =>{
    showToast("server error");
};
