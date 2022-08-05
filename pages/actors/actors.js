const Api = (`http://hp-api.herokuapp.com/api/characters`);
const divmain = document.getElementById(`div_main`);

function card(obj) {
  return `
  <div class="container-fluid my-1 text-light opacity-75" style="width: 18rem;">
    <img src="${obj["image"]}" style="height:50%" class="card-img-top" alt="...">
    <div class="card-body  ">
      <h5 class="card-title"> ${obj["name"]}</h5>
      <p class="card-text">${obj["species"]}</p>
      <p class="card-text">${obj["house"]}</p>
      <p class="card-text">${obj["dateOfBirth"]}</p>
      <p class="card-text">${obj["eyeColour"]}</p>
      <p class="card-text">${obj["ancestry"]}</p>

      
     </div>
    
  <div class=" card-body">
    <a href=" https://www.imdb.com/list/ls002739995/" class=" text-light card-link">MORE-INFO</a>
  </div>
</div>
  `
}
async function dataActors() {
  let conter = 0;
  try {
    await fetch(Api).then(response => response.json())
      .then(result =>
        result.forEach(obj => {
          if (conter < 24) {
            // console.log(obj); 

            divmain.innerHTML += card(obj)

          }
          conter++
        })

      )

  } catch (error) {
    alert(error)
  }

}
dataActors()

const serchButton = document.getElementById('serchActorBtn')

serchButton.addEventListener('click', async (event) => {
  event.preventDefault();
  const userInput = document.getElementById('serch');
  let actors = [];
  console.log(userInput.value);

  try {
    await fetch(Api).then(response => response.json())
      .then(actors => {
        const userSerchResult = actors.filter((actor) => {
          return actor.name === userInput.value
        });
        divmain.innerHTML = ""
        // console.log('-----2', userSerchResult);
        userSerchResult.forEach(obj => {
            divmain.innerHTML += card(obj);
        })

      }
      );

  } catch (error) {

  }



})

