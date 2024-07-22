const texts = [
    { text: 'Web Developer', color: '#b974fd' },
    { text: 'Software Developer', color: '#b974fd' },
    { text: 'Entrepreneur', color: '#b974fd' },
    { text: 'YouTuber', color: '#b974fd' },
    { text: 'Hobbyist', color: '#b974fd' },
    { text: 'Video Editor', color: '#b974fd' },
    { text: 'Photo Editor', color: '#b974fd' },
    { text: 'Content Creator', color: '#b974fd' }
];

let count = 0;
const changingTextElement = document.getElementById('changing-text');

function slideInText(text, color, callback) {
    changingTextElement.innerHTML = text;
    changingTextElement.style.setProperty('--clr', color);
    changingTextElement.style.width = '0';
    changingTextElement.style.color = 'transparent';
    changingTextElement.style.webkitTextStroke = `1px ${color}`;
    changingTextElement.style.transition = 'width 3s';
    
    setTimeout(() => {
        changingTextElement.style.width = '100%';
        changingTextElement.style.color = color;
        
        setTimeout(() => {
            callback();
        }, 3000); // Adjust this timing for how long you want the text to glow before sliding out
    }, 0);
}

function slideOutText(callback) {
    changingTextElement.classList.add('glow');
    
    changingTextElement.style.transition = 'width 3s';
    setTimeout(() => {
        changingTextElement.style.width = '0';
        setTimeout(callback, 3000); // Adjust this timing to match the slide-out duration
    }, 3000); // Wait for the glowing effect before sliding out
}

function changeText() {
    slideInText(texts[count].text, texts[count].color, () => {
        slideOutText(() => {
            count = (count + 1) % texts.length;
            changeText();
        });
    });
}

document.addEventListener('DOMContentLoaded', changeText);
