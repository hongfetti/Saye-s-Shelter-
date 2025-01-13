
const dog1 = {
    name: 'Murphy',
    age: 'puppy',
    size: 'small',
    gender: 'male',
    img: "./assets/images/Designer.png",
}
const dog2 = {
    name: 'Lulu',
    age: 'adult',
    size: 'medium',
    gender: 'female',
    img: "Designer.png",
}
const dog3 = {
    name: 'Buster',
    age: 'senior',
    size: 'large',
    gender: 'male',
    img: "Designer.png",
}
const dog4 = {
    name: 'Ava',
    age: 'puppy',
    size: 'small',
    gender: 'female',
    img: "Designer.png",
}
const dog5 = {
    name: 'Theo',
    age: 'adult',
    size: 'medium',
    gender: 'male',
    img: "Designer.png",
}
const dog6 = {
    name: 'Marley',
    age: 'senior',
    size: 'large',
    gender: 'female',
    img: "Designer.png",
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
        console.log('hello')
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
    dogImg.setAttribute('src', './assets/images/')
    dogImg.setAttribute('class', 'img-fluid rounded-start')
    dogImg.setAttribute('alt', 'photo of `${dog.name}`')
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
    dogName.textContent = `${dog.name}`
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

    const expandCardTitle = document.createElement('p')
    expandCardTitle.textContent = 
    extraInfo.appendChild(expandCardTitle)

    const expandCardBody = document.createElement('section')
    expandCardBody.setAttribute('class', 'card-body')
    extraInfo.appendChild(expandCardBody)

    const formTitle = document.createElement('h5')
    formTitle.textContent = 'Inquire about `${dog.name}`'
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
    formBtn.textContent = 'Submit'
    inquireForm.appendChild(formBtn)
}

displayResults() 