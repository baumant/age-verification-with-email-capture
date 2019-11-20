console.log('--age verification with email capture script loaded');

var twentyone = readCookie('twentyone');
var emailcaptured = readCookie('emailcaptured');

document.body.className += ' ' + 'noscroll';
document.getElementById('prompt-background').style.display = 'flex';

if (twentyone) {
  // remove noscroll class if user is over 21, hide age verification
  document.body.className = document.body.className.replace("noscroll","");
};