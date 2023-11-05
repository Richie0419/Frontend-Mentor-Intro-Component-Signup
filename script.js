const form = document.querySelector('form');
const inputs = document.querySelectorAll('.form-control input');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        if (!input.value) {
            input.parentElement.classList.add('error');
            setTimeout(() => {
               input.parentElement.classList.remove('error'); 
            }, 5000);
        } 
        else {
            input.parentElement.classList.remove('error');
            if (input === email) {
                if (!isValidEmail(emailValue)) {
                    input.parentElement.classList.remove('error');
                    setTimeout(() => {
                    input.parentElement.classList.remove('error'); 
            },  5000);}
                else{
                    input.parentElement.classList.add('error');
                    setTimeout(() => {
                    input.parentElement.classList.remove('error'); 
            },  5000);}
            }
        }
    });
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}