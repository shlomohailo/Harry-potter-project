const apiSpells = ("https://fedeperin-harry-potter-api-en.herokuapp.com/spells");
let tbody = document.getElementById("tbody");

async function getDataSpells() {
    try {
        return await fetch(apiSpells).then(response => response.json())
    } catch (error) {
        alert(error)
    }
}

async function printData() {
    try {
        await  getDataSpells().then(data => data.forEach(element => {
            tbody.innerHTML += `
            <tr>
            <td id="first">${element["spell"]}</td>
            <td id="second">${element["use"]}</td>
          </tr>
            `
    
        }))
    } catch (error) {
        alert(error)
    }
  
}


printData()



