const creatures = document.querySelector(".objContainer").getElementsByTagName("LI");

const newBtn = document.querySelector("#newBtn");

const nextBtn = document.querySelector("#nextBtn");

const endEncounterBtn = document.querySelector("#endBtn");

// let health = healthInput.value
// if(health === ""){
//     health = 100
// } else{
//     health = Number(health)
// }


class Creature{
    constructor(name, listIndex, health) {
        this.name = name;
        this.listIndex = listIndex;
        this.health = health;
    }
}

for (let i = 0; i < creatures.length; i++) {
    let objectClass = new Creature(creatures[i].innerText, i, creatures[i].innerHTML);
    console.log("health", objectClass.health);
    if(creatures[i].querySelector("input").value === ""){
        objectClass.health = hpToNum(i)
    } else{
        objectClass.health = Number(creatures[i].querySelector("input").value)
    }
    creatures[i].addEventListener("change", e => {
        objectClass.health = creatures[i].querySelector("input").value;
        creatures[i].querySelector("input").value = ""
        creatures[i].querySelector("input").placeholder = `${objectClass.health}hp`
        creatures[i].querySelector("input").className = "changed"
        creatures[i].querySelector("input").blur()
    });
    creatures[i].addEventListener("click", e => {
        for (let j = 0; j < creatures[i].classList.length; j++) {
            if(creatures[i].classList.contains(j)){
                creatures[i].classList.remove(j)
            }
        }
        creatures[i].classList.add("selected")
    })
}
function hpToNum(i){
    return (creatures[i].querySelector("input").placeholder.match(/\d+/g)[0]);
}
endEncounterBtn.addEventListener("click", e => {
    let message = "Are you sure you want to end the encounter?";
    let result = confirm(message);

    if (result) {
        resetPage()
    } else {
        console.log("user clicked cancel")
    }
});

nextBtn.addEventListener("click", e => {
    console.log("nexbtn was pressed");
});
newBtn.addEventListener("click", e => {
    newObj()
});

function resetPage(){
    console.log("page reset")
}
function newObj(){
    console.log("CREATE NEW OBJ")
    // maybe add a few alerts to get data
}