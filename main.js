// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal")
errorModal.classList.add("hidden")

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT HAS BEEN LOADED");
  errorModal.classList.add("hidden");
  clickListener();
});

function hideError() {
  errorModal.classList.add("hidden");
}

function clickListener() {
  document.addEventListener("click", (event) => {
    if(event.target.classList[0] === 'like-glyph') {
      //PROMISE! ASYNC, WE NEED A .THEN

      mimicServerCall()
        .then((resp) => {
          const activated = event.target.classList.contains("activated-heart");
          if(activated) {
            event.target.classList.remove("activated-heart");
            event.target.innerHTML = EMPTY_HEART;
          }else {
            event.target.classList.add("activated-heart");
            event.target.innerHTML = FULL_HEART;
          }
          activated;
        })//.300 secs
        .catch((error) => {
          console.log(error);
          errorModal.remove("hidden");
          setTimeout(() => {
            hideError();
          }, 3000);
        });//PROMISE FAILS, .CATCH -> CATCHES IT
    }
  });
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
