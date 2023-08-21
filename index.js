const animalAPIs = {
    cat:"https://catfact.ninja/fact?max_length=140"
}

async function fetchData(link){
    let data = await fetch(link)
    .then(r => {
        return r.json()        
    })
    .then(json => {return json})
    return data;
}

async function printData() {
    let data = await fetchData(animalAPIs['cat'])
    console.log(data);
}

printData();