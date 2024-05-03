function reverseS(input)
{
    let r,rev='';
    (setTimeout(()=>{
    
       //first way 
        for(let i=input.length-1;i>=0;i--)
           {
              rev+=input.charAt(i);
              
            }
          console.log(rev);
        //second way 
          //  r=Array.from(input)
          // console.log(r.reverse());

    },2000))
}
reverseS("Hello")// output: olleH