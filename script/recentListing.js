const buttons = document.getElementsByClassName("listingButton");
const lists = document.getElementsByClassName("listPlace")

const list1 = lists[0]
const list2 = lists[1]
const list3 = lists[2]

const elementNone = [
    {left: "0"},
    {left: "-1500px"},
]

const elementThere = [
    {right: "-1500px"},
    {right: "0"}
]

const animateDuration = {
    duration: 200,
}

let visible = [list1]
let unvisible = [list2, list3]

const listF = () => {
    if(visible[0].classList.contains("d-none")){
        visible[0].classList.remove("d-none")
    } 
    unvisible.forEach(item => {
        item.classList.add("d-none")
    })
}

window.addEventListener("load", () => {
    listF()
})

const intervalF = () => {
    if(visible[0] === list1){
        buttons[1].classList.add("activeButton")
        buttons[0].classList.remove("activeButton")
        buttons[2].classList.remove("activeButton")
        visible[0].animate(elementNone, animateDuration)
        unvisible.push(visible[0])
        visible.pop()
        visible.push(list2)
        unvisible.splice(unvisible.indexOf(visible[0]), 1)
        setTimeout(() => {
            visible[0].animate(elementThere, animateDuration)
            listF()
        }, 180);
    } else if(visible[0] === list2){
        buttons[2].classList.add("activeButton")
        buttons[0].classList.remove("activeButton")
        buttons[1].classList.remove("activeButton")
        visible[0].animate(elementNone, animateDuration)
        unvisible.push(visible[0])
        visible.pop()
        visible.push(list3)
        unvisible.splice(unvisible.indexOf(visible[0]), 1)
        setTimeout(() => {
            visible[0].animate(elementThere, animateDuration)
            listF()
        }, 180);
    } else if(visible[0] === list3){
        buttons[0].classList.add("activeButton")
        buttons[1].classList.remove("activeButton")
        buttons[2].classList.remove("activeButton")
        visible[0].animate(elementNone, animateDuration)
        unvisible.push(visible[0])
        visible.pop()
        visible.push(list1)
        unvisible.splice(unvisible.indexOf(visible[0]), 1)
        setTimeout(() => {
            visible[0].animate(elementThere, animateDuration)
            listF()
        }, 180);
    }
}

const timer = setInterval(() => {
    intervalF()
}, 5000);

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        if(buttons[i].classList.contains("button1")){
            buttons[0].classList.add("activeButton")
            buttons[1].classList.remove("activeButton")
            buttons[2].classList.remove("activeButton")
            list1.classList.add("selected")
            list2.classList.remove("selected")
            list3.classList.remove("selected")
            visible[0].animate(elementNone, animateDuration)
            unvisible.push(visible[0])
            visible.pop()
            visible.push(list1)
            unvisible.splice(unvisible.indexOf(visible[0]), 1)
        } else if(buttons[i].classList.contains("button2")){
            buttons[1].classList.add("activeButton")
            buttons[0].classList.remove("activeButton")
            buttons[2].classList.remove("activeButton")
            list2.classList.add("selected")
            list1.classList.remove("selected")
            list3.classList.remove("selected")
            visible[0].animate(elementNone, animateDuration)
            unvisible.push(visible[0])
            visible.pop()
            visible.push(list2)
            unvisible.splice(unvisible.indexOf(visible[0]), 1)
        } else if(buttons[i].classList.contains("button3")){
            buttons[2].classList.add("activeButton")
            buttons[0].classList.remove("activeButton")
            buttons[1].classList.remove("activeButton")
            visible[0].animate(elementNone, animateDuration)
            unvisible.push(visible[0])
            visible.pop()
            visible.push(list3)
            unvisible.splice(unvisible.indexOf(visible[0]), 1)
        }

        setTimeout(() => {
            visible[0].animate(elementThere, animateDuration)
            listF()
        }, 180);
    })

}