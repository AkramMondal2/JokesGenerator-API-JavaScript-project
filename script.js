const jokeBtn = document.getElementById("jokeBtn");
const joke =document.getElementById("joke");
document.addEventListener("DOMContentLoaded", funJoke)

jokeBtn.addEventListener("click", funJoke);

async function funJoke(){
   const jokeData = await fetch("https://icanhazdadjoke.com/",{
    headers: {
        "Accept": "application/json" 
    }
   });
 const jokeObj =await jokeData.json();
 joke.innerHTML = jokeObj.joke;
} 
