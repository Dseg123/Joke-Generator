async function getJoke() {
    const myJoke = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    });
    let joke2 = await myJoke.json();
    let jokeText = joke2["joke"];
    return jokeText;
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("my-button");
    btn.addEventListener("click", async function() {
       document.getElementById("my-joke").innerHTML = await getJoke();
    })
    
})

