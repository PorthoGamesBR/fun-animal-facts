

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

function onSubmit(e) {
    e.preventDefault();
    const form = document.getElementById("animal-form");
    const formData = new FormData(form)
    // Get text inside input with id animal-name
    const animalName = formData.get('animalName');
    // Get element with id animal-name-text
    const nameText = ""
    // Get element wit id animal-fact
    const factText = ""
}
  
async function printData() {
    let data = await dataFromAnimal('cat')
    console.log(data);
}