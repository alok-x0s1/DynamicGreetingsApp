const form = document.getElementById("login-form");
const container = document.querySelector(".container");
const username = document.getElementById("username");
const email = document.getElementById("email");
const greetBox = document.querySelector(".greet-message");
const date = new Date();

let greet = "";
if (date.getHours() >= 1 && date.getHours() < 12) {
  greet = "Good Morning😍";
} else if (date.getHours() >= 12 && date.getHours() < 17) {
  greet = "Good AfterNoon🫡";
} else if (date.getHours() >= 17 && date.getHours() < 21) {
  greet = "Good Evening🥰";
} else {
  greet = "Good Night💤";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const h1 = greetBox.querySelector("h1");
  const p = greetBox.querySelector("p");

  h1.innerHTML = `${greet} <span>@${username.value}</span>`;
  p.innerHTML = `Email : ${email.value}`;
  container.style.display = "none";
  greetBox.style.opacity = 1;
});
