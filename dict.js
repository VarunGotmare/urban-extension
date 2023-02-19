


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '38937ad05emsh132d744d210de20p19ab8ejsnb52a56921cac',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
};
let query = document.querySelector("#input");
let result = document.querySelector("#err");
let search = document.querySelector("#search");

window.addEventListener("load", ()=>{
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
})


    
    search.addEventListener("click",()=> {
        let word = query.value;
        fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,options)
        .then(response => response.json())
        .then(response => {
            let search = response.list[0];
            console.log(response)
            result.innerHTML = search.definition;
        })
        .catch(err => console.error(err));

    })


