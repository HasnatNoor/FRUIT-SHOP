// For making bills

function total() {
    const totallychee = lychee * 35;
    const totalmango = mango * 20;
    const totaldragon = dragon * 25;
    let bill = parseInt(document.querySelector('#bill input').value);

    bill = totallychee + totalmango + totaldragon;
    document.querySelector('#bill input').value = bill;
    

}
// For buying apples



function addlychee() {

    let pocket = parseInt(document.querySelector('#input input').value);
    let bill = parseInt(document.querySelector('#bill input').value);

    if (pocket < bill + 35) {
      alert("Enter More Money")
    } else {
        document.querySelector('#lychee-number').value = ++lychee;
       total();
    }
}
let lychee = 0;
function xlychee() {
  if(lychee == 0){
    alert("You don't have any lychee")
  }
  else{
    document.querySelector('#lychee-number').value = --lychee;
   total();
}
}
// For buying oranges

function addmango() {
    let pocket = parseInt(document.querySelector('#input input').value);
    let bill = parseInt(document.querySelector('#bill input').value);

    if (pocket < bill + 20) {
      alert("Enter More Money")
    } else {
        document.querySelector('#mango-number').value = ++mango;
       total();
    }
}
let mango = 0;

function xmango() {
  if(mango == 0){
    alert("You don't have any Mango!");
  }
  else{
    document.querySelector('#mango-number').value = --mango;
   total();
  }
}
// For buying bananas


function addDragonfruit() {
    let pocket = parseInt(document.querySelector('#input input').value);
    let bill = parseInt(document.querySelector('#bill input').value);

    if (pocket < bill + 25) {
      alert("Enter More Money")
    } else {
        document.querySelector('#dragon-number').value = ++dragon;
       total();
    }

}
let dragon = 0;
function xDragonfruit() {
  if(dragon == 0){
    alert("You don't have any Dragons!");
  }
  else{
    
    document.querySelector('#dragon-number').value = --dragon;
   total();
    }
}
