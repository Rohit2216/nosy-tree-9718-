function localData(e){
    e.preventDefault();

    let userdata={
        nameInput : document.getElementById('name').value,
        emailInput : document.querySelector('#email').value,
        addressInput : document.querySelector('#address').value,
        cityInput : document.querySelector('#city').value,
        stateInput : document.querySelector('#state').value,
        zipInput : document.querySelector('#code').value,
        cardNameInput : document.querySelector('#cardname').value,
        cardNumberInput : document.querySelector('#cardno').value,
        expMonthInput : document.querySelector('#exp').value,
        expYearInput : document.querySelector('#expyear').value,
        cvvInput : document.querySelector('#cvv').value
    };

    localStorage.setItem("Data-user", JSON.stringify(userdata));
}


let submitBtn = document.getElementById('paymentSubmit');
submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    openPopup(event);
    // alert("Order successfully placed"); 
    localData(event); 
});


let userData = JSON.parse(localStorage.getItem("Data-user"));

if (userData) {
    let name = userData.nameInput;
    let email = userData.emailInput;
    let address = userData.addressInput;
    let city = userData.cityInput;
    let state = userData.stateInput;
    let code = userData.zipInput;
    let cardName = userData.cardNameInput;
    let cardNumber = userData.cardNumberInput;
    let expMonth = userData.expMonthInput;
    let expYear = userData.expYearInput;
    let cvv = userData.cvvInput;
}



function openPopup(event) {
    // event.preventDefault();
  let popup = document.querySelector('.popup');
  popup.classList.add('open-popup');
}

function closePopup(event) {
    // event.preventDefault();
  let popup = document.querySelector('.popup');
  popup.classList.remove('open-popup');
}