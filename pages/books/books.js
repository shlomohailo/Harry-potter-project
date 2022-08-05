const api_Books = (`https://fedeperin-harry-potter-api-en.herokuapp.com/books`);


let counter = 0;
function photoForCard() {
    let array = [
        "/images/book1.webp",
        "/images/book2.webp",
        "/images/book3.webp",
        " /images/book4.webp",
        "/images/book5.webp",
        "/images/book6.webp",
        "/images/book7.webp",
        "/images/book8.webp",
        "/images/book9.webp",
    ];
    let pic = array[counter];
    counter++;
    return pic;
}

async function dataBooks() {
    let divbooks = document.getElementById("div_books")





    try {
        await fetch(api_Books).then(response => response.json())
            .then(data => data.forEach(element => {

                divbooks.innerHTML += `
                <div class=" container-fluid my-1 mx-5  text-danger" style="width: 18rem;">
                  <div class="card-body">
        
                     <img  src="${photoForCard()}" style="height:50%" class="card-img-top" alt="...">
                    <h5 class="card-title" > ${element["title"]}</h5>
                    <p class="card-text">${element["author"]}</p>
                   
                    <p class=" card-text" >${element["description"]}</p>

                    
                    <button type="button" class="btn btn-primary">Buy</button>
                    
                   </div>
              
              </div>
                `
            }))
    } catch (error) {
        alert(error)
    }
}
dataBooks()




