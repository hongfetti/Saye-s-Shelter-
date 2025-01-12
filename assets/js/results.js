
const dog1 = {
    name: 'Murphy',
    age: 'puppy',
    size: 'small',
    gender: 'male',
    img: "Designer.png",
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
const searchCriteria = readLocalStorage()
const resultsDisplayMain = document.getElementById('results-main')

// compare properties of searchCriteria and objects in availDogs for matches
const getNewArray = function () {

    const filteredDogs = availDogs.filter(function (dog) {
        if (dog.age === searchCriteria.age && dog.size === searchCriteria.size && dog.gender === searchCriteria.gender) {
            return true
        }
        return false
    })
    return filteredDogs
}

// if no results, show a card that says there are no results and to have a button to take back to landing page
let results = true

const noResults = function () {
    document.getElementById('dog-card').style.display = 'none'

    const noResultsMsg = resultsDisplayMain.createElement('p')
    noResultsMsg.textContent('No Results found. Please go back and try again')
    resultsDisplayMain.appendChild(noResultsMsg)
}



const displayResults = function () {
    let newArray = getNewArray()

    if (newArray) {
        newArray.forEach(function (dog) {
            createCard(dog)
        });
    } else {
        noResults()
    }
}
// display cards containing object information for new array
// create elements using js (WIP - commenting out for now)
// const createCard = function () {
//     const createdSection = resultsDisplayMain.createElement('section')
//     createdSection.setAttribute('class', 'card mb-3')
//     createdSection.setAttribute('style', 'max-width: 540px')
//     createdSection.setAttribute('id', 'dog-card')
//     resultsDisplayMain.appendChild(createdSection)

//     const rowDiv = createdSection.createElement('div')
//     rowDiv.setAttribute('class', 'row g-0')
//     createdSection.appendChild(rowDiv)

//     const dogImg = rowDiv.createElement('img')
//     dogImg.setAttribute('src', './assets/images/')
//     dogImg.setAttribute('class', 'img-fluid rounded-start')
//     dogImg.setAttribute('alt', 'photo of `${dog.name}`')

    
// }

displayResults() 