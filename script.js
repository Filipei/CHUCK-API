document.getElementById('butao').addEventListener('click', async ()=>{
    const api = await fetch('https://api.chucknorris.io/jokes/random').then(response => response.json())

    const dados = api.value

    console.log(api)
    const gif = document.getElementById('img')
    const texto = document.getElementById("textChuck")
    texto.innerHTML = `<p>${dados}</p>`
    gif.innerHTML = `<img src="./imagens/chuck_norris_by_shino100_d4lryq5-fullview-removebg-preview.png" alt="" width= "200px">`
})
    