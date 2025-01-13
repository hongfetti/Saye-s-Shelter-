
const dog1 = {
    name: 'Scruffy',
    ageYrs: 1,
    breed: 'Maltese',
    age: 'puppy',
    size: 'small',
    gender: 'male',
    description: 'Scruffy is a sweet, energetic puppy who is looking for a forever home to grow up. He is great with kids and other animals!',
    img: "./assets/images/Scruffy.jpg",
}
const dog2 = {
    name: 'Lulu',
    ageYrs: 7,
    breed: 'Corgi',
    age: 'adult',
    size: 'medium',
    gender: 'female',
    description: 'Lulu is a happy and playful Corgi who would love to go to a home that has kids to play with.',
    img: 'assets/images/lulu.avif',
}
const dog3 = {
    name: 'Max',
    ageYrs: 9,
    breed: 'Pitbull',
    age: 'senior',
    size: 'medium',
    gender: 'male',
    description: 'Max is a playful Pitbull who loves animals, but is not good with kids',
    img: 'assets/images/max.jpg',
}
const dog4 = {
    name: 'Ava',
    ageYrs: 1,
    breed: 'Chihuahua',
    age: 'puppy',
    size: 'small',
    gender: 'female',
    description: 'Ava is a cuddly puppy who loves to run around in extreme short bursts and then nap it off for a few hours.',
    img: 'assets/images/ava.webp',
}
const dog5 = {
    name: 'Jack',
    ageYrs: 2,
    breed: 'Golden Retreiver',
    age: 'puppy',
    size: 'medium',
    gender: 'male',
    description: 'Jack is a loving Golden Retriever who wants to go to a and happy fun home. He loves cats but must be the only dog in the house.',
    img: 'assets/images/jack.jpg',
}
const dog6 = {
    name: 'Bella',
    breed: 'Poodle Mix',
    ageYrs: 4,
    age: 'adult',
    size: 'large',
    gender: 'female',
    description: 'Bella is a silly and spoiled Poodle mix who loves kids and animals. She will make everyone happy with her cheerful personality.',
    img: 'assets/images/bella.jpg',
}
const availDogs = [dog1, dog2, dog3, dog4, dog5, dog6]
const searchCriteria = JSON.parse(localStorage.getItem('formData'))

console.log(searchCriteria)
const resultsDisplayMain = document.getElementById('results-main')

// compare properties of searchCriteria and objects in availDogs for matches
const getNewArray = function () {
    const filteredDogs = availDogs.filter(function (dog) {
        console.log(dog)
        if (dog.age === searchCriteria.age && dog.size === searchCriteria.size && dog.gender === searchCriteria.gender) {
            return true
        }
        return false
    })
    return filteredDogs
}

// if no results, show a card that says there are no results and to have a button to take back to landing page

const noResults = function () {
    const noResultsMsg = document.createElement('p')
    noResultsMsg.textContent = 'No Results found. Please go back and try again'
    resultsDisplayMain.appendChild(noResultsMsg)
}



const displayResults = function () {
    let newArray = getNewArray()
    if (newArray.length > 0) {
        newArray.forEach(function (dog) {
            createCard(dog)
        });
    } else {
        noResults()
    }
}

// display cards containing object information for new array
const createCard = function (dog) {
    const createdSection = document.createElement('section')
    createdSection.setAttribute('class', 'card mb-3')
    createdSection.setAttribute('style', 'max-width: 540px')
    createdSection.setAttribute('id', 'dog-card')
    resultsDisplayMain.appendChild(createdSection)

    
    const rowDiv = document.createElement('div')
    rowDiv.setAttribute('class', 'row g-0')
    createdSection.appendChild(rowDiv)

    const dogImg = document.createElement('img')
    dogImg.setAttribute('src', dog.img)
    dogImg.setAttribute('class', 'img-fluid rounded-start')
    dogImg.setAttribute('alt', 'photo of ' + dog.name)
    rowDiv.appendChild(dogImg)

    const dogCard = document.createElement('section')
    dogCard.setAttribute('class', 'col-md-8')
    dogCard.setAttribute('id', 'card')
    rowDiv.appendChild(dogCard)

    const dogInfoDisplay = document.createElement('article')
    dogInfoDisplay.setAttribute('class', 'card-body')
    dogCard.appendChild(dogInfoDisplay)

    const dogName = document.createElement('h5')
    dogName.setAttribute('class', 'card-title')
    dogName.textContent = dog.name
    dogInfoDisplay.appendChild(dogName)

    const dogBioShort = document.createElement('p')
    dogBioShort.setAttribute('class', 'card-text')
    dogBioShort.textContent = `${dog.description}`
    dogInfoDisplay.appendChild(dogBioShort)

    const btnContainer = document.createElement('p')
    btnContainer.setAttribute('class', 'd-inline-flex gap-1')
    dogInfoDisplay.appendChild(btnContainer)

    const showMoreBtn = document.createElement('button')
    showMoreBtn.setAttribute('class', 'btn btn-primary')
    showMoreBtn.setAttribute('type', 'button')
    showMoreBtn.setAttribute('data-bs-toggle', 'collapse')
    showMoreBtn.setAttribute('data-bs-target', '#collapseExample')
    showMoreBtn.setAttribute('aria-expanded', 'false')
    showMoreBtn.setAttribute('aria-controls', 'collapsExample')
    showMoreBtn.setAttribute('id', 'more-info')
    showMoreBtn.textContent = 'Click for more info'
    dogInfoDisplay.appendChild(showMoreBtn)

    const extraInfo = document.createElement('article')
    extraInfo.setAttribute('class', 'collapse')
    extraInfo.setAttribute('id', 'collapseExample')
    dogInfoDisplay.appendChild(extraInfo)

    const expandCardBody = document.createElement('section')
    expandCardBody.setAttribute('class', 'card-body')
    extraInfo.appendChild(expandCardBody)

    const formTitle = document.createElement('h5')
    formTitle.textContent = 'Inquire about ' + dog.name
    expandCardBody.appendChild(formTitle)

    const inquireForm = document.createElement('form')
    inquireForm.setAttribute('id', 'inquiry-form')
    expandCardBody.appendChild(inquireForm)

    const formSection1 = document.createElement('section')
    formSection1.setAttribute('class', 'mb-3')
    inquireForm.appendChild(formSection1)

    const s1Label = document.createElement('label')
    s1Label.setAttribute('for','nameInput')
    s1Label.setAttribute('class','form-label')
    s1Label.textContent = 'Name'
    formSection1.appendChild(s1Label)

    const s1Input = document.createElement('input')
    s1Input.setAttribute('type','text')
    s1Input.setAttribute('class','form-control')
    s1Input.setAttribute('id','nameInput')
    formSection1.appendChild(s1Input)

    const formSection2 = document.createElement('section')
    formSection2.setAttribute('class', 'mb-3')
    inquireForm.appendChild(formSection2)

    const s2Label = document.createElement('label')
    s2Label.setAttribute('for','exampleInputEmail')
    s2Label.setAttribute('class','form-label')
    s2Label.textContent = 'Email address'
    formSection1.appendChild(s2Label)

    const s2Input = document.createElement('input')
    s2Input.setAttribute('type','text')
    s2Input.setAttribute('class','form-control')
    s2Input.setAttribute('id','nameInput')
    formSection1.appendChild(s2Input)

    const textArea = document.createElement('section')
    textArea.setAttribute('class', 'mb-3')
    inquireForm.appendChild(textArea)

    const textAreaLabel = document.createElement('label')
    textAreaLabel.setAttribute('for','exampleFormControlTextarea1')
    textAreaLabel.setAttribute('class','form-label')
    textAreaLabel.textContent = 'Additional Notes (Optional)'
    textArea.appendChild(textAreaLabel)

    const textAreaInput = document.createElement('textarea')    
    textAreaInput.setAttribute('class','form-control')
    textAreaInput.setAttribute('id','exampleFormControlTextarea1')
    textAreaInput.setAttribute('rows','3')    
    textArea.appendChild(textAreaInput)

    const formBtn = document.createElement('button')
    formBtn.setAttribute('type', 'submit')
    formBtn.setAttribute('class', 'btn btn-primary')
    formBtn.setAttribute('data-bs-toggle', 'modal')
    formBtn.setAttribute('data-bs-target', '#exampleModal')
    formBtn.textContent = 'Submit'
    inquireForm.appendChild(formBtn)

    const inquiryModal = document.createElement('section')
    inquiryModal.setAttribute('class', 'modal fade')
    inquiryModal.setAttribute('id', 'exampleModal')
    inquiryModal.setAttribute('tabindex', '-1')
    inquiryModal.setAttribute('aria-labelledby', 'exampleModalLabel')
    inquiryModal.setAttribute('aria-hidden', 'true')
    inquireForm.appendChild(inquiryModal)

    const modalDialogue = document.createElement('section')
    modalDialogue.setAttribute('class', 'modal-dialog')
    inquiryModal.appendChild(modalDialogue)

    const modalContent = document.createElement('section')
    modalContent.setAttribute('class', 'modal-content')
    inquiryModal.appendChild(modalContent)

    const modalHeader = document.createElement('header')
    modalHeader.setAttribute('class', 'modal-header')
    modalContent.appendChild(modalHeader)

    const modalTitle = document.createElement('h1')
    modalTitle.setAttribute('class', 'modal-title fs-5')
    modalTitle.setAttribute('id', 'exampleModalLabel')
    modalTitle.textContent = 'Inquiry Submission'
    modalHeader.appendChild(modalTitle)

    const closeBtn = document.createElement('button')
    closeBtn.setAttribute('type', 'button')
    closeBtn.setAttribute('class', 'btn-close')
    closeBtn.setAttribute('data-bs-dismiss', 'modal')
    closeBtn.setAttribute('aria-label', 'Close')
    modalHeader.appendChild(closeBtn)

    const modalBody = document.createElement('article')
    modalBody.setAttribute('class', 'modal-body')
    modalBody.textContent = 'Congratulations! Your inquiry has been successfully submitted!'
    modalContent.appendChild(modalBody)

    const modalFooter = document.createElement('section')
    modalFooter.setAttribute('class', 'modal-footer')
    modalContent.appendChild(modalFooter)

    const dismissBtn = document.createElement('button')
    dismissBtn.setAttribute('type', 'button')
    dismissBtn.setAttribute('class', 'btn btn-secondary')
    dismissBtn.setAttribute('data-bs-dismiss', 'modal')
    dismissBtn.textContent = 'Close'
    modalFooter.appendChild(dismissBtn)

    inquireForm.addEventListener('submit', function (event){
        event.preventDefault()
        
    })
}



displayResults() 