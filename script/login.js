let getData = JSON.parse(localStorage.getItem("Data-User"));

let loginBtn = document.getElementById('btn');
let form = document.getElementById('loginForm');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let userMobile = form.mobile.value;
    let password = form.password.value;
    if (userMobile==="1234567890" && password==="admin@123"){
        alert("Welcome Back! Admin")
        window.location.href='admin.html'
    }
    else if (userMobile === getData.mobileNum && password === getData.password)
    {
        alert("Login Successfully");
        window.location.href = 'index.html'
    }

    else
    {
        alert("Invaild Mobile Number or Password")
    }
});
    
let bar = document.getElementById('timeBar');

bar.addEventListener('click', function () {
    window.location.href = 'index.html'
})
