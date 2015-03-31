var net = require('net');
var fs = require('fs');
var json = fs.readFileSync("./data.json", "utf8");
var bigArrayOfObjects = JSON.parse(json);

var server = net.createServer();

server.on('connection', function(client) { //'connection' listener

console.log('client connected');
client.write('Welcome to Carroll Gardens Meetup.\n May 2nd \n How to make a spec \n Please RSVP by entering \n RSVP name e-mail \n');
client.setEncoding('utf8');
client.on('data', function(stringFromClient) {
  // console.log(stringFromClient);
  var input = stringFromClient.trim();
  // client.write(input + "\n");
  var splitInput = input.split(' ');
  console.log(splitInput);
  // client.write(splitInput + "\n");
  var command = splitInput[0];
      var nameFromInput = splitInput[1];
      var emailFromInput = splitInput[2];

      if (command === "RSVP" && nameFromInput && emailFromInput){

      var newObject = {
          name: nameFromInput,
          email: emailFromInput
      }
      bigArrayOfObjects.push(newObject);
      var backToJson = JSON.stringify(bigArrayOfObjects);
      fs.writeFileSync("./data.json", backToJson);
      var numberRsvp = bigArrayOfObjects.length
      client.write("Thank you for your RSVP!\n" + numberRsvp.toString() + " will be attending\n")
      client.end();
  } else if (command === "RSVP" && nameFromInput !== input[1] && emailFromInput !== input[2]) {
        client.write("Please RSVP with your name and address \n RSVP name e@mailaddress.com" + '\n')
        client.end();
  }else if (command === 'list'){
    bigArrayOfObjects.forEach (function (element) {
      client.write('- ' + element.name + '\n');
    })
  } 
  // else if (command === refresh){
  //   delete bigArrayOfObjects
  // }
  })

});

server.listen(8124, function() { //'listening' listener
console.log("connected");
});