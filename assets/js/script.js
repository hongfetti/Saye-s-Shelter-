const subBtn = document.querySelector('#submitbtn')
const formEl = document.querySelector('#homeform')
const errorMessage = "Please complete the form.";
const selectionEl = document.querySelectorAll('.form-select')
// declare the variables of the form choice by size, age, gender
let error = document.querySelector('#error');


const handleFormSubmit = function(event) {
    event.preventDefault();

    if(selectionEl === '') {
        error.textcontent = errorMessage
    } else {
        let searchCriteria = {
            
        }
    }
};

let formData = {

}


const readLocalStorage = function () {
    let searchCriteria = JSON.parse(localStorage.getItem(searchCriteria))
    return searchCriteria
}

const storeLocalStorage = function (data) {
    localStorage.setItem('searchCriteria', JSON.stringify(data))
}
git