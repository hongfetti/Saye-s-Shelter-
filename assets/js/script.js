
const readLocalStorage = function () {
    let searchCriteria = JSON.parse(localStorage.getItem(searchCriteria))
    return searchCriteria
}

const storeLocalStorage = function (data) {
    localStorage.setItem('searchCriteria', JSON.stringify(data))
}