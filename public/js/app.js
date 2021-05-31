const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});


// app.post("/", function(req,res){
//   const name = req.body.fname;
//   const lastname = req.body.lname;
//   const email = req.body.email;
//   console.log(name + " " + lastname + " " + email);
//   const data = {
//     members: [
//       {
//         email_address: email,
//         status: "subscribed",
//         merge_fields: {
//           FNAME: name,
//           LNAME: lastname
//         }
//       }
//     ]
//   };
//   const jsonData = JSON.stringify(data);
//   const url = "https://us6.api.mailchimp.com/3.0/lists/f4c3b3c75a";
//   const option = {
//     method:"POST",
//     auth: "tastytim1989:dc138314773b8dd78c25cb88d2d71df2-us6",
//   }
//   const request = https.request(url, options, function(response){
//     if(response.statusCode === 200){
//       res.send("Succsessfully subscribed");
//     }else{
//       res.send("Error");
//     }
//     response.on("data", function(data){
//       console.log(JSON.parse(data));
//     });
//   });
//   console.log(jsonData);
//   request.write(jsonData);
//   request.end();
// });


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
