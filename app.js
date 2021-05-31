// npm install express
const express = require("express");

// npm install node-fetch
const fetch = require("node-fetch");

// npm install bodyparser
const bodyParser = require("body-parser");

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});


app.post('/', (req, res) => {
  const { fname, lname, email } = req.body;

  if (!fname || !lname || !email) {
    res.redirect('/failure.html');
    return;
  }

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: fname,
          LNAME: lname
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  fetch('https://us6.api.mailchimp.com/3.0/lists/{your id list}', {
    method: 'POST',
    headers: {
      Authorization: 'auth {your api-key}'
    },
    body: postData
  })
    .then(res.statusCode === 200 ?
      res.sendFile(__dirname + "/success.html") : res.sendFile(__dirname + "/failure.html"))
    .catch(err => console.log(err))
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
