const subBtn = document.querySelector('#submitbtn')

subBtn.addEventListener('submit', function(event) {
    event.preventDefault()
    location.assign('./results.html')
})
