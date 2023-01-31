const books = [
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J. K. Rowling',
    isbn: 1
  },
  {
    title: 'Atlas Shrugged',
    author: 'Ayn Rand',
    isbn: 2
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    isbn: 3
  },
]
console.log('books:', books)
console.log('typeof book:', typeof books)

const booksJson = JSON.stringify(books);
console.log('booksJson:', booksJson);
console.log('typeof booksJson:', typeof booksJson)

const studentJson = `{"id":21,"name":"jaden"}`
console.log('studentJson', studentJson)
console.log('typeof studentJson', typeof studentJson)

const student = JSON.parse(studentJson);
console.log('student', student)
console.log('typeof student:', typeof student)