const books = [
    {
        title: "Book 1",
        author: "Author 1",
        publishedYear: 2021,
        subject: "Science"
    },
    {
        title: "Book 2",
        author: "Author 2",
        publishedYear: 2019,
        subject: "History"
    },
    {
        title: "Book 3",
        author: "Author 3",
        publishedYear: 2020,
        subject: "Fiction"
    },
    {
        title: "Book 4",
        author: "Author 4",
        publishedYear: 2025,
        subject: "Fiction"
    },
    {
        title: "Book 5",
        author: "Author 5",
        publishedYear: 2018,
        subject: "chemistry"
    },
    {
        title: "Book 6",
        author: "Author 6",
        publishedYear: 2022,
        subject: "Fiction"
    },
];

const div = document.querySelector('div') 
const Getfiltersbooks = document.querySelector('#submit')

const filterbooks = books.filter (item => item.subject === "Fiction" && item.publishedYear > 2020)
console.log(filterbooks);

// filterbooks.forEach((item) => div.innerHTML += `<br> ${item.title} <br> ${item.author} <br> ${item.publishedYear} <br> ${item.subject}`)

Getfiltersbooks.addEventListener ('click' , () => filterbooks.forEach((item) => div.innerHTML += `<br> <b> Tittle: ${item.title} </b><br> Author: ${item.author} <br> Publisher: ${item.publishedYear} <br> Subject ${item.subject} <br>`) )


