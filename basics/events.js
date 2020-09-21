const events = require('events');

let userLoggedIn = 0;

const eventEmitter = new events.EventEmitter();
eventEmitter.on('userLoggedIn', () => {
  userLoggedIn += 1;
  console.log(`There are ${userLoggedIn} users in the app.`);
});

eventEmitter.emit('userLoggedIn');