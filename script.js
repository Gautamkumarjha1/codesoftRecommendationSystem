const books = [
  { title: "The Hobbit", genre: "Fantasy" },
  { title: "Dune", genre: "Sci-Fi" },
  { title: "Pride and Prejudice", genre: "Romance" },
  { title: "The Da Vinci Code", genre: "Mystery" },
  { title: "Sapiens", genre: "Non-fiction" },
  { title: "1984", genre: "Sci-Fi" },
  { title: "Harry Potter", genre: "Fantasy" },
  { title: "Gone Girl", genre: "Mystery" },
  { title: "The Notebook", genre: "Romance" }
];

function getRecommendations() {
  const selectedGenres = Array.from(document.querySelectorAll('.genres input:checked'))
                               .map(input => input.value);

  const recommendations = books.filter(book => selectedGenres.includes(book.genre));

  const list = document.getElementById('recommendations');
  list.innerHTML = '';

  if (recommendations.length === 0) {
    list.innerHTML = '<li>No recommendations found. Try selecting a genre.</li>';
  } else {
    recommendations.forEach(book => {
      const li = document.createElement('li');
      li.textContent = `${book.title} (${book.genre})`;
      list.appendChild(li);
    });
  }
}
