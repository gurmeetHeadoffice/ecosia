// Function to simulate loading and updating the counter
let count__digit = document.getElementsByClassName('count__digit')||[];
function updateCounter() {
  let counterValue = (parseInt(Date.now() / 1300 - 1121346128)-3105)
  setInterval(() => {
    const changedValue = Math.floor(Math.random() * 2) + 1;
    counterValue += changedValue;
    let demo = counterValue.toString().split('');
    demo.forEach((item,index)=>{
    count__digit[index].classList = `count__digit count__digit--digit-${item}`
    })
  }, 1471);
}

// Call the updateCounter function after the page has loaded
window.addEventListener("load", updateCounter);
