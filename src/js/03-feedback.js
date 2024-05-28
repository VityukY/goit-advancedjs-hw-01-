import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const currentData = localStorage.getItem("feedback-form-state");

form[0].value = currentData? JSON.parse(currentData).email:'';
form[1].value = currentData? JSON.parse(currentData).message:'';

const throttledHandler = throttle(() => localStorage.setItem("feedback-form-state", JSON.stringify(data)), 500);

let data = {email:'', message:''}
form.addEventListener('input', (e) => {
   if( e.target.nodeName === 'INPUT') {
      data.email = e.target.value
   }
   else if( e.target.nodeName === 'TEXTAREA') {
      data.message = e.target.value
   }

   throttledHandler();
   
})

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const currentData = localStorage.getItem("feedback-form-state");
   console.log(currentData);
   localStorage.removeItem("feedback-form-state")
   form[0].value =''
   form[1].value =''
 
})