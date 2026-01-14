// const COLLECTIONS_API_URL = 
// const AZHKAR_API_URL =
// const SEARCH_API_URL = 

const homeBtn = document.getElementById("home-btn");
const booksCollection = document.getElementById("books-collection");
const azhkarBtn = document.getElementById("azhkar");
const searchBook = document.getElementById("search-book");
const searchBtn = document.getElementById("search-btn");
const booksArea = document.getElementById("books");


searchBtn.addEventListener("submit", e => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    // console.log("searchTerm", searchTerm);

    if(searchTerm) {
       bookSearch(searchTerm); 
    } else {
        showMessage("Please enter a book to search", true);
    } 
});

async function bookSearch(query) {
    showMessage(`Searching for "${query}"...`, true, false);
    booksArea.innerHTML = "";

    try {
        const response = await fetch(`${SEARCH_API_URL} ${query}`);
        console.log(response);

        if (!renspone.ok) throw new Error ("Network error");

        const data = await response.json();
        clearMessage();
        console.log("data:", data);

        if(data.hdhj) {
            displayBooks(data.hdhj);
        } else {
            showMessage(`No results found for "${query}".`);
        }
    } catch (Error) {
     showMessage("Something went wrong, Please try again.", true);   
    }
};