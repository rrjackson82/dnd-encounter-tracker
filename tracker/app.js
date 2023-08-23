const objects = document.querySelector(".objContainer").getElementsByTagName("LI");
// const health = document.querySelector(".health");
let healthObj = [];
console.log('type of',  objects)
// let health = objects.map(o => {
//     console.log("map", o)
// })

class Object{
    constructor(name, listIndex, health) {
        this.name = name;
        this.listIndex = listIndex;
        this.health = health;
    }

}

for (i = 0; i < objects.length; i++){
    let health = objects[i].getElementsByTagName("input");
    healthObj.push(health[i])
}

health.addEventListener("input", () => {

})

console.log("there are", objects.length, "objects and", healthObj.length, "objects with health");
