const body = document.body;
const heading = document.querySelector(".heading")
const btn = document.querySelector("button")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist&type=single"

setInterval(()=>{
const red = Math.floor(Math.random()*256)
const green = Math.floor(Math.random()*256)
const blue = Math.floor(Math.random()*256)
const RandomColor = `rgb(${red},${green},${blue})`
const RandomBorder = `rgb(${green},${red},${blue})`
const RandomBtn = `rgb(${blue},${green},${red})`
body.style.backgroundColor = RandomColor
heading.style.border = `5px dotted ${RandomBorder}`
btn.style.backgroundColor = RandomBtn

},1000)

btn.addEventListener("click", ()=>{
    const Jokes = fetch(url)
    Jokes.then((response)=>{
      return response.json()
    }).then((data)=>{
     return data.joke
    }).then((joke)=>{
     heading.textContent = joke
    })
})


