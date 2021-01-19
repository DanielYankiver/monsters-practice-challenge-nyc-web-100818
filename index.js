// getAllMonsters()


//************* Grab Elements off the DOM ************/

const monsterContainer = document.querySelector('#monster-container')

const createMonster = document.querySelector('#create-monster')

const monsterForm = document.querySelector(".add-monster-form")


// function monsterFormReset () {
//     document.querySelector(".add-monster-form").reset()
// } 


//************* Event Listeners **********************/

monsterForm.addEventListener('submit', grabFormInputs)


//*********** Network Request (Fetch) **************/

function getAllMonsters() {
    fetch("http://localhost:3000/monsters/?_limit=50")
        .then(res => res.json())
        .then(monsterArray => createMonsterDivs(monsterArray))
}

getAllMonsters()


function createMonsterInDatabase(monsterObj) {
    fetch('http://localhost:3000/monsters', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(monsterObj),
    })
    .then(response => response.json)
    .then(slapMonsterOnDom)


}


//****** Manipulating the Dom and Logic  **********/

function createMonsterDivs(monsterArray) {
    monsterArray.forEach(monster => {
        monsterContainer.innerHTML += `
        <div class="monster" data-id=${monster.id}>
            <h2>Name: ${monster.name}</h2>
            <h4>Age: ${monster.age}</h4>
            <p>Description: ${monster.description}</p>
        </div> 
        `
    })
}

function slapMonsterOnDom(monster){
    monsterContainer.innerHTML += `
    <div class="monster" data-id=${monster.id}>
        <h2>Name: ${monster.name}</h2>
        <h4>Age: ${monster.age}</h4>
        <p>Description: ${monster.description}</p>
    </div>
    `
}


function grabFormInputs(event) {
    event.preventDefault()

    const name = event.target.name.value
    const age = event.target.age.value
    const description = event.target.description.value

    monsterObj = {
        name: name,
        age: age,
        description: description
    }

    createMonsterInDatabase(monsterObj)
    event.target.reset()
}

//************* Grab Elements off the DOM ***********/

//************* Event Listeners ********************/

//*********** Network Request (Fetch) **************/

//****** Manipulating the Dom and Logic ***********/

// function createMonsterForm(){
//     createMonster.innerHTML += `
//     <form class="add-monster-form">
//         <h3>Create A Monster!</h3>
//         <input
//             type="text"
//             name="name"
//             value=""
//             placeholder="Enter Monster Name"
//             class="input-text"
//         />
//         <br />
//         <input
//             type="text"
//             name="age"
//             value=""
//             placeholder="Enter Monster Age"
//             class="input-text"
//         />
//         <br />
//         <input
//             type="text"
//             name="description"
//             value=""
//             placeholder="Enter Monster Description"
//             class="input-text"
//         />
//         <br />
//         <input 
//             type="submit" 
//             name="submit" 
//             value="Create A New Monster" 
//             class="submit" 
//         />
//     </form>
//     `
// }

