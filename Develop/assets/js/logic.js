// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function darkMode() {
   element.idList.toggle('darkMode')

   
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage () {
  

}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage () {
  localStorage.setItem('inputArray', JSON.stringify(inputArray))
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

