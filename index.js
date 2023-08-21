const animalAPIs = {
    cat:"https://catfact.ninja/fact?max_length=140"
}

let data = await fetchData(animalAPIs['cat'])


async function fetchData(link){
    let data = ""
    await fetch(link)
    .then(r => {
        return r.json()        
    })
    .then(json => console.log(json))
    return data;
}