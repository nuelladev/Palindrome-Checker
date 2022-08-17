const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

// dad
// poop
function palindrome() {
  const word = document.querySelector(".input-text").value;
  let len = word.length;

  let start = word.substring(0, Math.floor(len / 2));
  let end = word.substring(len - Math.floor(len / 2));

  // let flip = end.split("").reverse().join("");

  let flip = [end].reverse().join();
  if (start === flip) {
    result.textContent = `${word.toUpperCase()} is a palindrome`;
  } else {
    result.textContent = `${word.toUpperCase()} is NOT a palindrome`;
  }
}