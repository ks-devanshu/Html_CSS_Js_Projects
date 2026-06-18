const imageEl = document.getElementById("photo");
const reviewEl = document.getElementById("review");
const authorEl = document.getElementById("author");

let persons = [
        {
        profile: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
        review: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
        author: "Cherise G"
    },
    {
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8oNuDl-XH0-Jk0iml47q2VlhsyQHmCTiFQ&s",
        review: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
        author: "Rosetta Q"
    },
    { 
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wz0j6iNcsEAAUlxR1zS7jElJ8RnGj-74_w&s",
        review: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
        author: "Constantine V"
    }
];

let i = 0;

setInterval( () => {
    let index = i++;
    if (i >= persons.length)
        i = 0;
    imageEl.src = persons[index].profile;
    reviewEl.innerHTML = persons[index].review;
    authorEl.innerHTML = persons[index].author;
}, 5000);