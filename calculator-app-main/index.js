
answer = 8008135;
document.querySelector('.displayNum').innerHTML = answer;


//-------Detect Mouse Click----------
//add event listener to each image with the .drum class
//loop through all of the drum buttons using the query on the class.
for (var i = 0; i<document.querySelectorAll('.btn').length; i++){
  document.querySelectorAll('.btn')[i].addEventListener("click", function(){

    var isANumber = isNaN(this.innerHTML) === false;

      if (isANumber){
        entry = Number(this.innerHTML);
      }
      else {
      entry = this.innerHTML;
    };

      console.log(entry);
      console.log(typeof(entry));
  });
} // end of for loop

//-------Detect Keyboard key----------
//add in the eventlistener for the keydown eventlistener
//pass the event into the function (using 'event' or 'e')
document.addEventListener("keydown", function(event) {
  changeDisplay(event.key);
});


//-------Play Sound----------
//create a function that gets activated by the eventListeners, both the click and keydown
function changeDisplay(key){


  switch (key) {
  case "0":
    document.querySelector('.displayNum').innerHTML = key;
    break;

  case "1":
    document.querySelector('.displayNum').innerHTML = key;
    break;
  case "2":
    document.querySelector('.displayNum').innerHTML = key;
    break;

  case "3":
    document.querySelector('.displayNum').innerHTML = key;
    break;
  case "4":
    document.querySelector('.displayNum').innerHTML = key;
    break;

  case "5":
    document.querySelector('.displayNum').innerHTML = key;
    break;
  case "6":
    document.querySelector('.displayNum').innerHTML = key;
    break;

  case "7":
    document.querySelector('.displayNum').innerHTML = key;
    break;
  case "8":
    document.querySelector('.displayNum').innerHTML = key;
    break;

  case "9":
    document.querySelector('.displayNum').innerHTML = key;
    break;

  default:
    console.log(key);
  }

}
