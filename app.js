var five = require("johnny-five");
var board = new five.Board();
var firebase = require("firebase");

board.on("ready", function() {
  var led = new five.Led(13);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });
  var config = {
    apiKey: "AIzaSyAWUY7Gktc6TPJugr0vQQ-RZ4XCF_EhBJM",
    authDomain: "iot-tutorial-c4c86.firebaseapp.com",
    databaseURL: "https://iot-tutorial-c4c86.firebaseio.com",
    storageBucket: "iot-tutorial-c4c86.appspot.com",
  };
  firebase.initializeApp(config);

  var starCountRef = firebase.database().ref('lampada').on('value', function(snapshot) {

  let lampada = snapshot.val();
  if(lampada == 'on'){
    led.on();
  }else{
    led.off();
  }
});
});