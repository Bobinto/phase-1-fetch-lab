function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  bookList.innerHTML = "";

  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}

fetch("https://anapioficeandfire.com/api/books")
  .then((response) => response.json()) 
  .then((books) => {

    renderBooks(books);
  })
  .catch((error) => console.error("Error fetching books:", error));
