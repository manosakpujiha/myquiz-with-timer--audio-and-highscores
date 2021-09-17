 //Questions
 const questions = [
    {
        question: 'What is my native igbo name?',
        answers: [
            {text: 'Emeka', correct: false},
            {text: 'Ndubisi', correct: true},
            {text: 'Nduka', correct: false},
            {text: 'Uwomano', correct: false}
        ]
    },
    {
        question: 'What\'s my favourite color?',
        answers: [
            {text: 'White', correct: false},
            {text: 'Red', correct: false},
            {text: 'Black', correct: false},
            {text: 'Blue', correct: true}
        ]
    },
    {
        question: 'If i could choose just one place to spend the rest of my life, which of these locations would it be?',
        answers: [
            {text: 'Paris', correct: false},
            {text: 'California', correct: true},
            {text: 'Toronto', correct: false},
            {text: 'Sydney', correct: false}
        ]
    },
    {
        question: 'Which is most important to me?',
        answers: [
            {text: 'Affluence', correct: false},
            {text: 'Love', correct: false},
            {text: 'Respect', correct: true},
            {text: 'Power', correct: false}
        ]
    },
    {
        question: 'Which of these animals would i prefer as a pet?',
        answers: [
            {text: 'Dog', correct: true},
            {text: 'Cat', correct: false},
            {text: 'Parrot', correct: false},
            {text: 'Gold fish', correct: false}
        ]
    },
    {
        question: 'What movie genre do i prefer?',
        answers: [
            {text: 'Sci-Fi', correct: true},
            {text: 'Horror', correct: false},
            {text: 'Romance', correct: false},
            {text: 'Comedy', correct: false}
        ]
    },
    {
        question: 'What sport do i play?',
        answers: [
            {text: 'Soccer', correct: false},
            {text: 'Volley Ball', correct: false},
            {text: 'Basket Ball', correct: false},
            {text: 'Lawn Tennis', correct: true}
        ]
    },
    {
        question: 'What did i study?',
        answers: [
            {text: 'Mathematics', correct: false},
            {text: 'Physics', correct: false},
            {text: 'Comp. Sci', correct: false},
            {text: 'Engineering', correct: true}
        ]
    },
    {
        question: 'What is my state of origin?',
        answers: [
            {text: 'Kano', correct: false},
            {text: 'Delta', correct: true},
            {text: 'Imo', correct: false},
            {text: 'Abuja', correct: false}
        ]
    },
    {
        question: 'In which Nigerian state did i spend my childhood years?',
        answers: [
            {text: 'Kano', correct: true},
            {text: 'Delta', correct: false},
            {text: 'Imo', correct: false},
            {text: 'Abuja', correct: false}
        ]
    },
    {
        question: 'What board game would i prefer?',
        answers: [
            {text: 'Ludo', correct: false},
            {text: 'Monopoly', correct: false},
            {text: 'Scrabble', correct: false},
            {text: 'Chess', correct: true}
        ]
    },
    {
        question: "The music playing right now is from one of my all-time favourite video games, which one?",
        answers: [
            {text: 'God of War 3', correct: false},
            {text: 'Contra Hard Corps', correct: true},
            {text: 'Double Dragon V', correct: false},
            {text: 'Super Mario Bros. 3', correct: false}
        ]
    },
    {
        question: 'What operating system do i prefer?',
        answers: [
            {text: 'Linux', correct: false},
            {text: 'Mac-OS/ Apple-iOS', correct: false},
            {text: 'Windows', correct: true},
            {text: 'Android', correct: false}
        ]
    },
    {
        question: 'Which is my preferred phone brand?',
        answers: [
            {text: 'Apple', correct: false},
            {text: 'Samsung', correct: true},
            {text: 'Techno', correct: false},
            {text: 'Infinix', correct: false}
        ]
    },
    {
        question: 'Which is my preferred computer brand?',
        answers: [
            {text: 'Apple', correct: false},
            {text: 'DELL', correct: false},
            {text: 'HP', correct: true},
            {text: 'Toshiba', correct: false}
        ]
    },
    {
        question: 'How do i relax?',
        answers: [
            {text: 'Video Games', correct: true},
            {text: 'Watch Movies', correct: false},
            {text: 'Go Hiking', correct: false},
            {text: 'Go Clubbing', correct: false}
        ]
    },
    {
        question: 'What type of music would i like?',
        answers: [
            {text: 'All', correct: true},
            {text: 'Gospel', correct: false},
            {text: 'Rap', correct: false},
            {text: 'Jazz', correct: false}
        ]
    },
    {
        question: 'What works best for my physical fitness?',
        answers: [
            {text: 'Push-ups', correct: false},
            {text: 'Running', correct: false},
            {text: 'Walking', correct: false},
            {text: 'Swimming', correct: true}
        ]
    },
    {
        question: 'What was my favourite subject in secondary school?',
        answers: [
            {text: 'Mathematics', correct: false},
            {text: 'Physics', correct: false},
            {text: 'Chemistry', correct: false},
            {text: 'Biology', correct: true}
        ]
    },
    {
        question: 'What car brand would i rather go for?',
        answers: [
            {text: 'Mazda', correct: false},
            {text: 'Toyota', correct: true},
            {text: 'Mercedes', correct: false},
            {text: 'Ford', correct: false}
        ]
    },
    {
        question: 'What flavour would i go for first?',
        answers: [
            {text: 'Lemon', correct: false},
            {text: 'Chocolate', correct: false},
            {text: 'Vanilla', correct: false},
            {text: 'Strawberry', correct: true}
        ]
    },
    {
        question: 'I have 3 other siblings, which position am i in my family?',
        answers: [
            {text: 'First-born', correct: false},
            {text: 'Second-born', correct: true},
            {text: 'Third-born', correct: false},
            {text: 'Last-born', correct: false}
        ]
    },
    {
        question: 'What do my taste buds prefer when it comes to foods?',
        answers: [
            {text: 'Sugary', correct: false},
            {text: 'Bitter', correct: false},
            {text: 'Sour', correct: false},
            {text: 'Spicy', correct: true}
        ]
    },
    {
        question: 'What drink would i rather go for?',
        answers: [
            {text: 'Beer', correct: false},
            {text: 'Water', correct: false},
            {text: 'Energy Drink', correct: false},
            {text: 'Wine', correct: true}
        ]
    },
    {
        question: 'What was my secondary school nick-name?',
        answers: [
            {text: 'Maximos', correct: false},
            {text: 'Strange Man', correct: false},
            {text: 'Usman', correct: false},
            {text: 'Vampire', correct: true}
        ]
    },
    {
        question: 'What video game genre do i prefer?',
        answers: [
            {text: 'Shooting', correct: false},
            {text: 'Fighting', correct: false},
            {text: 'Sports', correct: false},
            {text: 'Strategy', correct: true}
        ]
    }
]