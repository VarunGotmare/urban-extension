const search = document.getElementById("search");
const input = document.getElementById("input");
const result = document.getElementById("res")

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '38937ad05emsh132d744d210de20p19ab8ejsnb52a56921cac',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
};




    
    search.addEventListener("click", () => {
        let word = input.value;
        console.log(word)
        if (word === ""){
            alert("Please Enter A Word");
            return;
        }
        else{
            fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,options)
        .then(response => response.json())
        .then(response => {
            let search = response.list[0];
            console.log(response)
            result.innerHTML = `<div class="data">
            <div id="meaning" class="meaning">
              <h3>${word}</h3>
            </div>
            <div class="details">
              <p>${search.definition}</p>
            </div>
           </div>`;
        })
        .catch(err => console.error(err));
       
        }
    });
   


