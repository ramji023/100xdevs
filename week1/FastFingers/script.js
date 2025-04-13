
const para = `writing a paragraph without punctuation for words is quite a challenge but i can definitely do it so lets get
started imagine a world where everything flows endlessly without a pause or a break words just keep going and
thoughts never stop moving forward it feels like a river rushing down the mountain without any obstacles or
barriers to slow it down people talk and talk and never stop to take a breath ideas mix and blend together in a
continuous stream that never truly settles it is an endless journey of expression where sentences have no clear
beginning or end thoughts collide and merge forming something entirely new and unpredictable this kind of
writing creates a sense of urgency and excitement like a never ending race where the finish line is always just
out of reach you might think it would be hard to understand but in reality it forces you to focus more carefully
on the meaning of the words since there are no commas or periods to guide you you must rely on the natural
rhythm of language to make sense of everything this is how speech sometimes works when people are excited or
overwhelmed by emotion their words tumble out in a rapid flow with no time for pauses or breaks imagine someone
telling a story in a rush their voice full of energy and passion they just keep going and going trying to get
everything out before they lose their train of thought it can be overwhelming but also exhilarating because it
captures the raw intensity of human expression without the usual structure and constraints in a way this style
of writing mirrors the way our minds actually work thoughts do not always come in neat orderly sentences instead
they appear in bursts and waves constantly shifting and evolving as new ideas emerge and old ones fade away
sometimes when you are deep in thought you may find yourself lost in a mental labyrinth where one idea leads to
another and another with no clear direction or endpoint it is a fascinating experience and one that is perfectly
reflected in this style of writing where everything blends together in a seamless flow there is something
strangely beautiful about this lack of structure it feels free and unrestricted allowing ideas to take shape in
    their purest form without being forced into rigid grammatical rules of course punctuation exists for a reason it
helps us organize our thoughts and communicate more clearly but sometimes it is interesting to see what happens
when we strip all of that away and just let words exist on their own without interference it is like a stream of
consciousness where everything is connected and nothing is held back like a dream that never quite settles into
a single form always shifting always changing always moving forward in a way this endless flow of words is a
reminder that language is alive constantly evolving and adapting to the needs of those who use it so even though
this paragraph may seem chaotic and unstructured there is a certain rhythm and harmony to it that makes it feel
natural and organic like a conversation that never really ends`


const htmlParagraph = document.querySelector('p')  // store the htmlparagraphelement instance

// create span elements for all the character which is present in para string
const textContent = [...para].map((item) => {
    const spanElement = document.createElement('span');
    spanElement.textContent = item;
    spanElement.setAttribute('class', 'spanElement')
    return spanElement;
})


// Create a blinking cursor element
const cursor = document.createElement('span');
cursor.setAttribute('id', 'cursor');
cursor.textContent = '|'; // Cursor symbol
cursor.style.animation = "blink 0.8s infinite";

htmlParagraph.appendChild(cursor);


// append only 200 span element in htmlParagraph instance
let spanIndex = 0;
const appendSpanElement = (textContent, index) => {
    let startIndex = index;
    let endIndex = startIndex + 200;
    while (endIndex > startIndex && textContent[endIndex]?.innerText !== " ") {
        endIndex--;
    }
    while (startIndex < endIndex && startIndex < textContent.length) {
        htmlParagraph.appendChild(textContent[startIndex])
        startIndex++;
    }
    spanIndex = startIndex;
}
appendSpanElement(textContent, spanIndex)
// textContent.forEach((element) => {
//     htmlParagraph.appendChild(element);
// })



//whenever user press down any key
document.addEventListener("keydown", (e) => {
    cursor.style.animation = "none";
    return checkKey(e.key);
})
// check wheather user key is equal to text content text and update color
let index = 0;
const checkKey = (key) => {
    console.log(key);
    if (/^[a-zA-Z0-9 ]$/.test(key)) {
        const timer = document.querySelector('.timer').innerText;
        startTimer(Number(timer))
        let result = (key === textContent[index].innerText) ? true : false;
        if (result && key !== ' ') {
            textContent[index].style.color = 'white'
        } else if (!result && textContent[index].innerText !== " ") {
            textContent[index].style.color = 'red'
        }
        moveCursor();

        // if user complete first chunk of textContent
        if (index === spanIndex) {
            htmlParagraph.innerHTML = " ";
            htmlParagraph.appendChild(cursor);
            appendSpanElement(textContent, spanIndex);
        }
        return index++
    }
}

function moveCursor() {
    if (index < textContent.length) {
        textContent[index].after(cursor);
    }
}


// set the timer
const timerDiv = document.querySelector('.timer');
const selectTimerButton = document.querySelectorAll('.boxDiv');
selectTimerButton.forEach((node) => {
    node.addEventListener('click', () => setTimer(node.innerText))
})
function setTimer(timer) {
    if (Number(timer)) {
        console.log("timer is : ", timer)
        document.querySelector('.timer').innerText = timer
    }
}

// start the clock
function startTimer(time) {
    const timerID = setInterval(() => {
        if (time > 0) {
            console.log(time);
            time = time - 1;
            document.querySelector('.timer').innerText = time
        } else {
            console.log("timer is stopped")
            clearInterval(timerID);
        }
    }, 1000)
}


