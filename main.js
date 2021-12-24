const messages = {
    quote: [
        'Be the change that you wish to see in the world.',
        'Be yourself; everyone else is already taken.',
        'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
        'We accept the love we think we deserve.',
        'It is never too late to be what we might have been.',
        'Everything you can imagine is real.'
    ],
    name: ['Mahatma Gandhi', 'Oscar Wilde', 'Thomas A. Edison', 'Stephen Chbosky', 'George Eliot', 'Pablo Picasso'],
    nationality: ['Indian', 'Irish', 'American', 'American', 'English', 'Spanish'],
};

const randomNumber = array => Math.floor(Math.random() * array.length);

const generateRandomQuote = message => {
    let randomIndex = randomNumber(message.name);
    for(let key in message) {
        if(key === 'quote') 
            quote = message[key][randomIndex];
        else if(key === 'name')
            names = message[key][randomIndex];
        else if(key === 'nationality')
            nationality = message[key][randomIndex];
    }
    return `"${quote}" - ${names} (${nationality})`;
};

console.log(generateRandomQuote(messages));