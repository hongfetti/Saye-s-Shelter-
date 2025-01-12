//prevent form from submitting the traditional way
// document.getElementById('homeform').addEventListener('submit', function(event) {
//     event.preventDefault();
//     window.location.href = './results.html'
// })
//values from the dropdown
const pet = document.getElementById('pet').value;
const age = document.getElementById('age').value;
const gender = document.getElementById('gender').value;
const size = document.getElementById('size').value;

const searchValues = {
    age: age.value,
    size: size.value,
    gender: gender.value,
}

const readLocalStorage = function () {
    return JSON.parse(localStorage.getItem('searchCriteria'))
}

const storeLocalStorage = function (value) {
    localStorage.setItem('searchCriteria', JSON.stringify(value))
}

// const redirectPage = function () {
//     window.location.href = './results.html'
// }

const formSubmit = function (event) {
    event.preventDefault()
    if (pet === '2') {
        //if they select "no" for adopt a pet, the page doesn't submit
        document.getElementById('error').textContent = 'Change response to "Yes" if you want to adopt.';
        //check and make sure the dropdowns don't have the "option choices" selected
    } else if (pet === '' || age === '' || gender === '' || size === '') {
        document.getElementById('error').textContent = 'Please select an option from all the dropdowns to submit.';
    } else {
        let searchInput = []
        const searchValues = {
            age: age.value,
            size: size.value,
            gender: gender.value,
        };
        searchCriteria = searchInput.push(searchValues)
        storeLocalStorage(searchCriteria)

        redirectPage('/results.html')
    }
}

document.getElementById('homeform').addEventListener('submit', formSubmit)

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(redirectURL);
};