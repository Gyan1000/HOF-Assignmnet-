
function getRandomNumber()
{
    console.log("Random no is:- ",Math.floor(Math.random()*1000));
}

let count=0;

setInterval( ()=>{
if(count==3)
   {
     count=0;  
    //clearInterval(id);
      console.log("time over")
      getRandomNumber();
    } 
    count++;
    let d=new Date();
    let seconds=d.getSeconds();
    console.log(seconds);
 },1000);

