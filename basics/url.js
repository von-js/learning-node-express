const url = require('url');
const { serialize } = require('v8');

const myUrl = new URL('https://mywebiste.com/user.html?id=100&status=active');

// serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// host root domain name
console.log(myUrl.host);
// path name
console.log(myUrl.pathname);
// serialized query
console.log(myUrl.search);
// params obj
console.log(myUrl.searchParams);