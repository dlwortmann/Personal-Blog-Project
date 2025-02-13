// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle')
let lightMode = "light"

console.log(toggleButton)

var circle = document.querySelector(':root')

function getFunction() {
  var styles = getComputedStyle(circle)
  var circleColor = styles.getPropertyValue("--circle-color")

  console.log(circleColor)
}
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    console.log('clicked toggle')
    document.body.classList.toggle('light');
    const isDarkMode = !document.body.classList.contains('light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  });
}
const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.remove('light');
  }



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage () {
  const prevPosts = localStorage.getItem("blogEntry");
  return prevPosts ? JSON.parse(prevPosts) : [];
}
readLocalStorage()

function storeLocalStorage(blogEntry) {
  let prevPosts = JSON.parse(localStorage.getItem("blogEntry")) || []
 //const blogEntry = prevPosts ? JSON.parse(prevPosts) : []
  prevPosts.push(blogEntry)
  localStorage.setItem("blogEntry", JSON.stringify(prevPosts))
} 


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url)
}
