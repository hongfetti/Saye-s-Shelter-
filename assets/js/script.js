// const subBtn = document.querySelector('#submitbtn')
// const formEl = document.querySelector('#homeform')
// const errorMessage = "Please complete the form.";
// const errorEl = document.querySelector('errorMessage');
// formEl.appendChild(errorEl);

// const handleFormSubmit = function(event) {
//     event.preventDefault();
//     const selectionEl = document.querySelector('.class-select')

//     if(!selectionEl) {
//         document.querySelector('error')
//     }
// };

// const storeLocalStorage = function() {
//     const formSelect = document.querySelectorAll('.form-select');
//     const formData = {

//     }
// }

const readLocalStorage = function () {
    return JSON.parse(localStorage.getItem('searchCriteria'))
}

const storeLocalStorage = function (data) {
    localStorage.setItem('searchCriteria', JSON.stringify(data))
}

localStorage.setItem('searchCriteria', JSON.stringify({
    age: 'puppy',
    size: 'small',
    gender: 'male',
}))