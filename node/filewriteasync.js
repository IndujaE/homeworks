const fs=require("fs");

fs.writeFile("hello.txt","hloooo,assynchronous",function(err){
    if(err){
        console.log(err);
    }
    console.log("file saved");
});