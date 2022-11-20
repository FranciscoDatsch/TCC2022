// const mqtt = require('mqtt')
// const client  = mqtt.connect('mqtt://test.mosquitto.org')

// client.on('connect', function () {
//   client.subscribe('presence', function (err) {
//     if (!err) {
//       client.publish('presence', 'Hello mqtt')
//     }
//   })
// })

// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
//   client.end()
// })

// ----------------------------------------------

const conn = document.getElementById('connect')

function clicar() {
    console.log('Hello World'); 
}

conn.onclick = clicar