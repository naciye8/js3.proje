
const calculateCharacter = () => {
  // Write your codes here
let tweet=prompt("lutfen tweetinizi yaziniz");
let tweetCount=tweet.length;
let tweetLeft=150-tweetCount;

console.log(" You have written " + tweetCount + "characters, you have " + tweetLeft + "characters remaning");

alert(" You have written " + tweetCount + "characters, you have " + tweetLeft + "characters remaning")

}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
