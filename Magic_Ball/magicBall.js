const answers = [
  "I think, yes!",
  "Ask me later I am tired",
  "Try to google it",
  "Sounds reasonable",
  "Unpredictable outcome",
  "Concentrate and ask again",
  "Don’t count on it",
  "It is certain",
  "Most likely",
  "Almost impossible",
  "Everythink is possible",
  "My reply is no",
  "Universe say no",
  "Outlook good",
  "Fortune is on your side",
  "Signs point to yes",
  "Will you dare?",
  "Without a doubt",
  "Yes",
  "No",
  "Force is with you!",
  "You may rely on it",
  "Go for it!",
  "Let it go",
  "It will be fine, soon...",
  "What your heart tells?",
  "Do what feels right",
  "Do not focus on it!",
  "Leave it for later",
  "Ask a human for advice!",
  "Do not overthink",
  "I am just a ball",
  "Flip a coin",
  "Explore it deeper",
  "Take your chances",
  "Think twice before",
];

const ball = document.querySelector(".ball");
const text = document.querySelector(".text p");
const wrapper = document.querySelector(".wrapper");
let inAnimationState = false;

const ballAnswer = ball.addEventListener("click", function () {
  // Prevent reaction on user double clicking if animation is already initiated//
  if (inAnimationState) {
    return;
  }

  inAnimationState = true;
  text.classList.add("fadeOut");
  wrapper.classList.add("fadeOut");
  text.classList.remove("fadeIn");
  wrapper.classList.remove("fadeIn");

  setTimeout(function () {
    const randomReplyNumber = Math.floor(Math.random() * answers.length);
    const phrase = answers[randomReplyNumber];

    if (text.innerHTML !== "Need some answers?") {
      text.innerHTML = "Need some answers?";
    } else {
      text.innerHTML = phrase;
    }

    text.classList.remove("fadeOut");
    wrapper.classList.remove("fadeOut");
    text.classList.add("fadeIn");
    wrapper.classList.add("fadeIn");
  }, 1000);

  setTimeout(function () {
    inAnimationState = false;
  }, 1000);
});
