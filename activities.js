var addMobile = document.getElementById('addMobileButton');
addMobile.addEventListener('click', function () {
  addQuantity('mobileNumber');
  setPrice('mobilePrice', 1219);
  setTotaAndlSubTotal();
});

var removeMobile = document.getElementById('removeMobileButton');
removeMobile.addEventListener('click', function () {
  console.log('clicked');
  removeQuantity('mobileNumber');
  setPrice('mobilePrice', -1219);
  setTotaAndlSubTotal();
});

var addCover = document.getElementById('addCoverButton');
addCover.addEventListener('click', function () {
  console.log('clicked');
  addQuantity('coverNumber');
  setPrice('coverPrice', 59);
  setTotaAndlSubTotal();
});

var removeCover = document.getElementById('removeCoverButton');
removeCover.addEventListener('click', function () {
  console.log('clicked');
  removeQuantity('coverNumber');
  setPrice('coverPrice', -59);
  setTotaAndlSubTotal();
});

function addQuantity(id) {
  var current = document.getElementById(id).value;
  var currentNumber = parseInt(current);
  console.log(currentNumber);
  currentNumber++;
  document.getElementById(id).value = currentNumber;
}
function removeQuantity(id) {
  var current = document.getElementById(id).value;
  var currentNumber = parseInt(current);
  if (currentNumber == 0) return;
  console.log(currentNumber);
  currentNumber--;
  document.getElementById(id).value = currentNumber;
}

function setPrice(id, Price) {
  var current = document.getElementById(id).innerHTML;
  var currentNumber = parseInt(current);
  if (Price < 0 && currentNumber == 0) return;
  currentNumber += Price;
  document.getElementById(id).innerHTML = currentNumber;
}
function setTotaAndlSubTotal() {
  var totalMobile = document.getElementById('mobilePrice').innerText;
  var totalMobileNumber = parseInt(totalMobile);
  var totalCover = document.getElementById('coverPrice').innerText;
  var totalCoverNumber = parseInt(totalCover);
  var total = totalCoverNumber + totalMobileNumber;
  document.getElementById('subtotal').innerText = total;
  document.getElementById('total').innerText = total;
}
