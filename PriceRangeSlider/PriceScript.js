const rangeValue=document.querySelector(".slider .price-slider");
const rangeInputValue=document.querySelectorAll(".range-input input");
let PriceGap=500;
const priceInputvalue=document.querySelectorAll(".price-input input");
for(let i=0;i<priceInputvalue.length;i++){
    priceInputvalue[i].addEventListener("input",e=>{
        let minp=parseInt(priceInputvalue[0].value); //.value is a form element access whatever the
                                                         //user types in input field
        let maxp=parseInt(priceInputvalue[1].value);
        let diff=maxp-minp;

        if(minp<0){
            alert("minimum price cant be less than 0");
            priceInputvalue[0].value=0;
            minp=0;
        }
        if(maxp>10000){
            alert("max price cant be greater than 10000");
            priceInputvalue[1].value=10000;
            maxp=10000;
        }
        if(minp>maxp -PriceGap){
            priceInputvalue[0].value=maxp=PriceGap;
            minp=maxp-PriceGap;

            if(minp<0){
                priceInputvalue[0].value=0;
                minp=0;
            }
        }
if(diff>= PriceGap && maxp<=rangeInputValue[1].max){
    if(e.target.className==="min-input"){
        rangeInputValue[0].value=minp;
        let value1=rangeInputValue[0].max;
        rangeValue.style.left=`${(minp/value1)*100}%`;
    }
    else{
        rangeInputValue[1].value=maxp;
        let value2=rangeInputValue[1].max;
        rangeValue.style.right=`${100 -(maxp / value2)*100}`;
    }
}


    });

for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal = parseInt(rangeInputvalue[0].value);
            let maxVal = parseInt(rangeInputvalue[1].value);

            let diff = maxVal - minVal
            
            // Check if the price gap is exceeded
            if (diff < priceGap) {
            
                // Check if the input is the min range input
                if (e.target.className === "min-range") {
                    rangeInputvalue[0].value = maxVal - priceGap;
                }
                else {
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            }
            else {
            
                // Update price inputs and range progress
                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
                rangevalue.style.right = `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
            }
        });
    }

}