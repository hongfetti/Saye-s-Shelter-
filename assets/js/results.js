
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
const dog4 =  {
    name: 'Ava',
    age: 'puppy',
    size: 'small',
    gender: 'female',
    img: "Designer.png",
}
const dog5 =  {
    name: 'Theo',
    age: 'adult',
    size: 'medium',
    gender: 'male',
    img: "Designer.png",
}
const dog6 =  {
    name: 'Marley',
    age: 'senior',
    size: 'large',
    gender: 'female',
    img: "Designer.png",
}
const availDogs = [dog1, dog2, dog3, dog4, dog5, dog6]

// compare properties of searchCriteria and objects in availDogs for matches
const getNewArray = function () {
    const searchCriteria = readLocalStorage()

    let newPet = {
        age: searchCriteria.age,
        size: searchCriteria.size,
        gender: searchCriteria.gender,
    }

    for (let i = 0; i < availDogs.length; i++) {
        const currentObj = availDogs[i];
        if (currentObj.age === newPet.age && currentObj.size === newPet.size && currentObj.gender === newPet.gender) {
            // pull objects off array that match criteria and create new array
            const searchResult = availDogs.toSpliced(1, i)
            return searchResult
        } else {
            noResults()
        }
    }
}
// if no results, show a card that says there are no results and to have a button to take back to landing page
let results = true 

const noResults = function () {
    const changeCard = document.getElementById(card)
    const clearCard = changeCard.setAttribute('class', 'noResults')

    clearCard.textContent = ""
}



const displayResults = function () {
    let newArray = getNewArray ()





    
    // display cards containing object information for new array
        // create element      
        // populate information on element
        // append element to page
}

// displayResults() 