const API_USERS = ('https://my-json-server.typicode.com/Jeck99/fake-server/users');
let tbody = document.getElementById("tbody");


async function getDataUsers() {
    try {
        return await fetch(API_USERS).then(reponse => reponse.json())
    } catch (error) {
        alert(error)
    }
}


async function printDataUsers() {
    try {
        getDataUsers().then(data =>data.forEach(elementuser => {
            tbody.innerHTML += `
            <tr>
            <td id="first">${elementuser.name.first} ${elementuser.name.last}</td>
            <td id="second"> ${elementuser.email} </td>
          </tr>
            `}))

    } catch (error) {
        alert(error)
    }

}
printDataUsers()