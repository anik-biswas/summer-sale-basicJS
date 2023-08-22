let total =0;
let discount =0;
let grand_total=0;
let coupon='SELL200';
function handleClickBtn(target)
{
    const selectedItemContainer= document.getElementById("selected-item")
    const itemName=target.childNodes[5].innerText;
    
    const li=document.createElement("li");
    li.style.listStyle="decimal inside";
    li.innerText=itemName;
    selectedItemContainer.appendChild(li);
    const price= target.childNodes[7].innerText.split(' ')[0];
    total=parseInt(total)+parseInt(price);
    document.getElementById("total").innerText=total;
    if(total>0)
    {
        document.getElementById("purchase").disabled=false;
    }
    if(total>=200)
    {
        document.getElementById("apply").disabled=false;
    }
    grand_total=total;
    document.getElementById("grand_total").innerText=grand_total;

}

function handleClickApply()

{
    const result = document.getElementById("input").value;
    if (result.length>0)
    {
        if (coupon.match(result))
     {
        discount=(total*20)/100;
        grand_total=total-discount;
        document.getElementById("discount").innerText=discount;
        document.getElementById("grand_total").innerText=grand_total;
        document.getElementById("input").value=null;
     }
        else
     {
        alert("coupon code is wrong");  
     }

    }
    else
    {
        alert("Enter the coupon Code");
    }
   
}
function handleClick()
 {
    document.getElementById("total").innerText='00';
    document.getElementById("grand_total").innerText='00';
    document.getElementById("discount").innerText='00';
    document.getElementById("selected-item").innerText=null;

 }
