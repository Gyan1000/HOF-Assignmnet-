const items=[
{item:"book",usd:5},
{item:"pen",usd:1},
{item:"NoteBook",usd:3},
{item:"NewsPapper",usd:2},
{item:"Eraser",usd:1}
]
console.log("Before conversion",items)

function conversion(items){
const details=items.map((item,index)=>{

    return ({item:item.item , rupees:(item.usd*80)});
      
});
return details;
}

console.log("After conversion US Doller to INR",conversion(items));