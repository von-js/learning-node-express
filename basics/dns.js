const dns = require('dns');

try {
  dns.lookup('googlse.com', (err, value) => {
    if (err){
      console.log(err);
      return;
    }
    console.log(value);
  });
} catch (err) {
    console.log(err);
}

// dns.resolve('google.com', 'MX', (err, value) => {
//   if (err){
//     console.log(err);
//     return;
//   }
//   console.log(value);
// });

// dns.reverse('8.8.8.8', (err, value) => {
//   if (err){
//     console.log(err);
//     return;
//   }
//   console.log(value);
// });
