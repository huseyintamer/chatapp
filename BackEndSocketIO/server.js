var io = require('socket.io')();


 io.on("connection", socket => {
   console.log("a user baglandi");

   socket.on("message", message => {
     console.log(message);
   });
 });

 io.listen(2020);