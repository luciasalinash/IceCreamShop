const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    number: /^\d{6,10}$/, // 6 a 10 numeros.
    numic: /^\d{1,10}$/, // 6 a 10 numeros.
}

// USER FORM SCRIPT

//////// Put DOM elements into variables ////////
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const numberInput = document.querySelector('#number');
const numberIceCreamInput = document.querySelector('#numic');
const msg0 = document.querySelector('.msg0');
const msg1 = document.querySelector('.msg1');
const msg2 = document.querySelector('.msg2');
const msg3 = document.querySelector('.msg3');
const cityInput = document.querySelector('#city');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

// function MyApi(){
//     //   console.log(cityInput.value);
//    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=50a7aa80fa492fa92e874d23ad061374`)
//    .then(Response => Response.json())
// //    .then(data =>console.log(data))
//    .then(data => {
//         let temp = data['main']['temp'];
//         let lat = data['coord']['lat'];
//         let main = data['weather'][0]['main'];
//         // console.log(data);
       
//    });
   
//   }

function onSubmit(e, temp) {
    e.preventDefault();
    
    // API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=50a7aa80fa492fa92e874d23ad061374`)
   .then(Response => Response.json())
    //    .then(data =>console.log(data))
   .then(data => {
        let temp = data['main']['temp'];
        let lat = data['coord']['lat'];
        let main = data['weather'][0]['main'];

        console.log(temp);
    let usd;
    if(temp >= 293.15){
        usd = 15;
        console.log(usd);
    }else{
        usd = 10;
    }

    if(nameInput.value === '' || numberInput.value === '' || numberIceCreamInput.value === '') {
      alert('Please enter all fields');
    //   msg0.classList.add('.error');
    //   msg0.innerHTML = 'Please enter all fields';
  
      // Remove error after 3 seconds
      setTimeout(() => msg0.remove(), 3000);
      }else{
      // Create new list item with user
      const li = document.createElement('li');

      // Add text node with input values
      li.appendChild(document.createTextNode(`${nameInput.value} -  ${numberInput.value} - Ice Creams: ${numberIceCreamInput.value} - TOTAL:$${numberIceCreamInput.value*usd} USD`));
  
      // Add HTML
      // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
  
      // Append to ul
      userList.appendChild(li);

      // Clear fields
      nameInput.value = '';
      numberInput.value = '';
      numberIceCreamInput.value = '';
      cityInput.value = '';

    }
   });

  }

  