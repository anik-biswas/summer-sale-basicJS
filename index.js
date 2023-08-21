let total =0;
let discount =0;
let grand_total=0;
let coupon='SELL200';
function handleClickBtn(target)
{
    const selectedItemContainer= document.getElementById("selected-item")
    const itemName=target.childNodes[3].innerText;
    
    const li=document.createElement("li");
    li.style.listStyle="decimal inside";
    li.innerText=itemName;
    selectedItemContainer.appendChild(li);
    const price= target.childNodes[5].innerText.split(' ')[0];
    total=parseInt(total)+parseInt(price);
    document.getElementById("total").innerText=total;
    
    grand_total=total-discount;
    document.getElementById("grand_total").innerText=grand_total;

}

function handleClickApply()

{
    document.querySelector("#btn").disabled=true;
    const result = document.getElementById("input").value;
    if(total>=200)
   {
    document.querySelector("#btn").disabled=false;
    if (coupon.match(result))
    {
        discount=(total*20)/100;
        grand_total=total-discount;
        document.getElementById("discount").innerText=discount;
        document.getElementById("grand_total").innerText=grand_total;
    }
    else
    {
        alert("coupon code is wrong");  
    }
   }
    
}