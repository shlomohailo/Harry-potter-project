// const Api = (`http://hp-api.herokuapp.com/api/characters`);


// async function homeFunc() {
//     let conter = 0;
//     let divhome = document.getElementById(`div_home`);
//     try {
//         await fetch(Api).then(response => response.json())
//             .then(result =>



//                 result.forEach(obj => {
//                     if (conter < 20) {
//                         // console.log(obj); 

//                         divhome.innerHTML += `<div class="card my-1" style="width: 18rem;">
//                          <img src="${obj["image"]}" style="height:50%" class="card-img-top" alt="...">
//                         <div class="card-body">
//                           <h5 class="card-title"> ${obj["name"]}</h5>
//                           <p class="card-text">${obj["species"]}</p>
//                         </div>
//                         <ul class="list-group list-group-flush">
//                           <li class="list-group-item">${obj["gender"]}</li>
//                           <li class="list-group-item">${obj["house"]}</li>
//                           <li class="list-group-item">${obj["dateOfBirth"]}</li>
//                           <li class="list-group-item">${obj["eyeColour"]}</li>
//                           <li class="list-group-item">${obj["gender"]}</li>
//                           <li class="list-group-item">${obj["gender"]}</li>
//                         </ul>
//                         <div class="card-body">
//                           <a href="#" class="card-link">Card link</a>
//                           <a href="#" class="card-link">Another link</a>
//                         </div>
//                       </div>
                        
//                         `
//                     }
//                     conter++
//                 })

//             )


//     } catch (error) {
//         alert(error)
//     }

// }
// homeFunc()



