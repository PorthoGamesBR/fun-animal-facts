async function fetchData(link){
    let data = ""
    await fetch(link)
    .then(r => {
        return r.json()        
    })
    .then(json => console.log(json))
    return data;
}