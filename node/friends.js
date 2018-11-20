const server=require("http");

const ser=server.createServer(function(req,res){
    if(req.url=='/'){
        res.write("helloooo");
        res.end();
    }
    if(req.url=="/friends"){
        const fs=require("fs");
        fs.readFile("friendslist.txt","utf8",function(err,data){
            if(err){
               // console.log(err);
               res.write(err);
               res.end();
            }
            else{
               // console.log(data);
               res.write(data);
               res.end();
            }

        })
    }
});

ser.listen(3000);
console.log("listening to port 3000");
