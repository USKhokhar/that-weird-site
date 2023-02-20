// BEFORE JUDGING ME, Just keep in mind the fact that i made this in single night for fun... and I didn't write code... I PLAYED WITH IT!

const h1 = document.querySelector('h1')
const fancy =document.querySelector('.fancy')
const dontBtn = document.querySelector('.dont-btn')
const doBtn = document.querySelector('.do-btn')
const loopBtn = document.querySelector('.loop-btn')
const ball = document.querySelector('.foot-ball')

const links = document.querySelectorAll('.random-link')

// VARIABLES
let currentIndex = 0;

// BOOLEANS
let btnVisible = true
let isDont = true

// HTML STUFF
const heading =  `<h1>This is a freaking <span class="fancy">cool</span> website!</h1>`

const loopBtnTxt = [
    "i'm brave",
    "told you, i'm!",
    "but what!?",
    "SPEAK!",
    "how dare you!",
    "You are done!",
    "what trapped?",
    "till the end",
    "everything ends",
    "hey! don't go personal",
    "no!",
    "none of your business!", 
    "like you",
    "i'm not a kid", 
    "stop calling me kid",
    "ENOUGH",
    "k fine",
    "ARGHHHH",
    "I'm leaving! You stay alone",
    "bye",
    "🏃"
]

const loopTxt = [
    "No You are not",
    "believe me kid, you aren't",
    "you are not brave but",
    "but...",
    "you are dumb",
    "oh you are in no position to raise voice",
    "says the person trapped with a machine",
    "how long are you going to try?",
    "there's no end",
    "like your dumb ass love life?",
    "ok fineee sorry... but you still not leaving?",
    "you got a lot of free time",
    "stop using those annoying exclamation marks... very annoying",
    "WOAH WOAH WOAH Mind your language, kid!",
    "OH HO That's funny thing to say, little kid",
    "No I won't... what will you do? cry?",
    "HEy hey... calm down... be sporty, we are just having fun",
    "kid... GAHAHAHHA",
    "Awww... kid is getting annoyed",
    "Fine... you are not fun... Go HUG yourself",
    "😤"
]


// HEADING STUFF
h1.addEventListener('mouseenter', () => {
    fancy.innerHTML = 'strange'
    fancy.style.opacity = '0.9'
    btnVisible ? showBtn() : hideBtn()
})

h1.addEventListener('mouseleave', () => {
    fancy.innerHTML = 'cool'
    fancy.style.opacity = '0.6'
})

function flickr(){
    const random = Math.random()
    fancy.style.opacity = random
}

setInterval(flickr, 100)

// BUTTONS STUFF
dontBtn.addEventListener("click", () => {
    h1.innerHTML = `<h1>
        <span class='fancy'>DON'T CLICK</span>
    </h1>`

    loopBtn.style.display = 'block'
    loopBtn.innerHTML = loopBtnTxt[0]

    hideBtn()
    btnVisible = false
})

doBtn.addEventListener("click", () => {
    doBtn.style.display = 'none'
    h1.innerHTML = `<h1>This button is just like you <span class='fancy'>USELESS 🤗</span></h1>`
})

// LOOP BUTTON
loopBtn.addEventListener("click", () => {
    if(currentIndex === loopBtnTxt.length - 1) {
        h1.innerHTML = `${heading}`
        loopBtn.style.display = 'none'
        btnVisible = true
        isDont = false
        currentIndex = 0
    } else{
            h1.innerHTML = `<h1><span class='fancy'>${loopTxt[currentIndex]}</span></h1>`
        loopBtn.innerHTML = `${loopBtnTxt[currentIndex]}`
    }
    currentIndex++;
})

// BOOL FUNCTIONS

function showBtn() {
    isDont ? dontBtn.style.display ='block' : dontBtn.style.display ='none'
    doBtn.style.display ='block'
}

function hideBtn(){
    dontBtn.style.display = 'none'
    doBtn.style.display = 'none'
}

// BALL MOTION
document.addEventListener("mousemove", (e) => {
    ball.style.left = e.pageX + 'px'
    ball.style.transform = `rotate(${e.pageX/Math.PI}deg)`
    ball.style.filter = `hue-rotate(${e.pageY*Math.PI}deg)`
})

// MISC

window.addEventListener("load", () => {
    links.forEach(el => {
        const xRandom = Math.random() * (window.innerWidth - el.offsetWidth)
        const yRandom = Math.random() * (window.innerHeight - el.offsetHeight)

        // el.style.left = `${xRandom}px`
        // el.style.top = `${yRandom}px`

        el.style.translate = `${xRandom}px ${yRandom}px`

        console.log(el)
    })
})