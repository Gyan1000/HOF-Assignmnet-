const books=[{author:"Shri_Ram",year:2000},
{author:"Shri_Gangadhar",year:1999},
{author:"Narayan",year:2020},
{author:"Madhusudan",year:2015},
{author:"Vasudev",year:2003} 
]
let info =" ";
function printAuthorNames(books){
    //filter all records  
 info=books.filter((book,index)=>book.year<2010)

//now convert the author's name in capital letters
 let authors=info.map((book,index)=>book.author.toUpperCase())

return authors;
}
console.log(printAuthorNames(books));

