// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.getElementById('toggle')
const theme = document.getElementById('dark', 'light')

function darkMode() {
   element.idList.toggle('click',)


}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage () {
  return JSON.parse(localStorage.getItem('inputArray'))


}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage (inputArray) {
  localStorage.setItem('inputArray', JSON.stringify(inputArray))

}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

//const redirectPage = function (url) {
 // redirectURL = url;
  //location.assign(url);
//};

