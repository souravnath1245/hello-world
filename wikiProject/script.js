const input = document.querySelector(".main-search");
const searchBtn = document.querySelector(".main-btn");


searchBtn.addEventListener("click",searchWiki);


function searchWiki(event){
    event.preventDefault();
    showGif("show")
    // displaySearchResult(searchbtn.value);
    let searchValue = input.value; 

    const origin = "https://en.wikipedia.org";
    const url =`${origin}/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${searchValue}`
    // const origin = "https://www.example.org/w/api.php";
    //     let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${x}`;
    // console.log(url);

    fetch(url).then(function(data){
    return data.json();
    }).then(displayData).catch(function(error){
        alert(`Sorry! I don't know What is it.`)
    })
} 
 
function displayData(data){
    showGif('hide')
    console.log(data);
    let result = data.query.search;
    let output = ""
    result.forEach(function(item){
        output += `<li class="search-item">
        <h2 class="search-item-title">${item.title}</h2>
        <p class="search-item-text">${item.snippet}</p>
        <a href="https://en.wikipedia.org/?curid=${item.pageid}" aleart="blank" class="search-item-link">read more....</a>
    </li>`
    })
    document.querySelector('.result').innerHTML = output;
}

function showGif(value){
    if(value === "show"){
        document.querySelector(".wait-icon").classList.add("show")
    }
    else if( value === "hide"){
        document.querySelector(".wait-icon").classList.remove("show")
    }
}