let search = document.querySelector("#search-input");
let botton = document.querySelector("#btn")
let result = document.querySelector("#suggestions");

let alldata = {};
botton.addEventListener("click", () => {
    if (search.value != "") {
        let api = `https://images-api.nasa.gov/search?q=${search.value}`
        fetch(api)
            .then(api => api.json())
            .then(data => alldata = { ...data })
            .then(end => alldata.collection.items.forEach(element => {
                console.log(element.data[0].description);
                result.innerHTML += `<div class="box">
            <img src=${element.links[0].href}>
            <h1 >${element.data[0].title}</h1>
            <p >${element.data[0].description} </p>
            
            </div>`
            })
            )
    } 
})
