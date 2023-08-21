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

async function dataFromAnimal(animalName){
    const link = animalAPIs[animalName.toLowerCase()];
    if (!link) {
        return "This animal isn't on our database, so it doesn't exist. Goodbye."
    }
    else
    {
        const data = await fetchData(link);
        return data['fact']; 
    }
}
 
async function printData() {
    let data = await dataFromAnimal('cat')
    console.log(data);
}

printData();