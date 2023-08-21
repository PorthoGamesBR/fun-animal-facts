const animalAPIs = {
    cat:{
        link:"https://catfact.ninja/fact?max_length=140",
        readData: (d) => {return d['fact']}
    },
    dog:{
        link: "https://dogapi.dog/api/v2/facts?limit=1",
        readData: (d) => {return d["data"][0]["attributes"]["body"]}
    } 

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
    const animalConnectionData = animalAPIs[animalName.toLowerCase()];
    if (!animalConnectionData) {
        return "This animal isn't on our database, so it doesn't exist. Goodbye."
    } 
    else
    {
        const link = animalConnectionData.link;
        const data = await fetchData(link);
        console.log(data)
        return animalConnectionData.readData(data); 
    }
}

function changeElementText(id,text) {
    const elm = document.getElementById(id);
    elm.innerText = text;
}

function onSubmit(e) {
    e.preventDefault();
    const form = document.getElementById("animal-form");
    const formData = new FormData(form)
    // Get text inside input with id animal-name
    const animalName = formData.get('animalName');
    changeElementText("animal-name-text", animalName)
    
    async function setFactText() {
        changeElementText("animal-fact", "Loading...")
        const fact = await dataFromAnimal(animalName)
        changeElementText("animal-fact", fact)
    }
    setFactText();
}
  
// For API debugging
async function printData(animalName) {
    let data = await dataFromAnimal(animalName)
    console.log(data);
}