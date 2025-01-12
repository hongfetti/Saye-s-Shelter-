//prevent form from submitting the traditional way
document.getElementById('homeform').addEventListener('submit', function(event) {
    event.preventDefault();

//values from the dropdown
const pet = document.getElementById('pet').value;
const age = document.getElementById('age').value;
const gender = document.getElementById('gender').value;
const size = document.getElementById('size').value;

//check and make sure the dropdowns don't have the "option choices" selected
if (pet === ''  || age === '' || gender === '' || size === '') {
    document.getElementById('error').textContent = 'Please select an option from all the dropdowns to submit.';
    return;
}

//if they select "no" for adopt a pet, the page doesn't submit
const want = document.getElementById('pet').value;
if (pet === '2') {
    document.getElementById('error').textContent = 'Change response to "Yes" if you want to adopt.';
    return
}

//redirect to next page 
window.location.href = './results.html'
});
