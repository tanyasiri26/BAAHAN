let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick =() =>{
    loginForm.classList.toggle('active');
    navbar.classList.toggle('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.toggle('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onroad = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}