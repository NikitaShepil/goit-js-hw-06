const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);
const userInfo = {}
function onFormSubmit (event){
    event.preventDefault();
    
    userInfo.email = event.currentTarget.elements.email.value;
    userInfo.password = event.currentTarget.elements.password.value;
    if(userInfo.email === '' || userInfo.password === ''){
        alert('усі поля повині бути заповнені');
        return;
    }
    else{
        console.log(userInfo)
    }
formEl.reset();
}
