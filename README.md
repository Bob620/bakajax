# Bakajax

Bakajax is a simple module that creates easy to use and remember functions for sending ajax from Node.js using Promises.

### Installation:
---

##### NPM (Node.js)
```sh
npm install --save bakajax
```
### Use
---
After installing it in your setup, require it like any other module and then you are free to use it as needed.
```javascript
var bakajax = require('bakajax');

// Way #1
bakajax.post("http://www.test.com/api", {"data": "yo"})
  .then(function(response) {
    // Add any code you need here to handle correct output
  }, function(err) {
    // Add your error handling code here
  });
    
// Way #2
bakajax.post("http://www.test.com/api", {"data": "yo"})
  .then(function(response) {
    // Add any code you need here to handle correct output
  })
  .catch(function(err) {
    // Add your error handling code here
  });
```
### Explanation
---
Bakajax uses Promises in order to assure the best ajax requesting and to make life easy for people using it. For this reason it works like any other Promisfied function in that it has a .then() and a .catch() for the outputs of the ajax function.
#### Requests
Every request is made the same as the examples, just with a different function name. Currently Bakajax supports GET, POST, PUT, and DELETE requests.
```javascript
bakajax.post(url, data);
bakajax.put(url, data);
bakajax.delete(url, data);
bakajax.get(url, data);
```
When sending json with these functions make sure that you send javascript's version, and not a string, else an error will most likely happen somewhere between your request and the server's response.
```json
{"Key": "Value"}
```
#### Responses
In order to make sure that everything Bakajax gives the user is json Bakajax checks the response message for a content-type of "application/json" and if it finds that the response is in json it will parse it into javascript json so that all normal operations can be preformed.

For example if the server were to swap the Key and Value and send the response back:
```json
Sent: {"Key": "Value"}
Response: {"Value": "Key"}
```
However, if the server sends back information that is NOT specified as "application/json" Bakajax puts it into a json value:
```json
Sent: {"Key": "Value"}
Response: {"body": "Server reply"}
```