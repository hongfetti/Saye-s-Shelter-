
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

    let reqPet = {
        age: searchCriteria.age,
        size: searchCriteria.size,
        gender: searchCriteria.gender,
    }



    // pull objects off array that match criteria and create new array
}

const displayResults = function () {
    let newArray = getNewArray ()





    
    // display cards containing object information for new array
        // create element      
        // populate information on element
        // append element to page
}

// displayResults() 