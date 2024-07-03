console.log("Script initialise")
let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container")
console.log(boxes)

function getRandomColor(){
    let c1=0 +Math.random()*255
    let c2=0 +Math.random()*255
    let c3=0 +Math.random()*255

    return `rgb(${c1}, ${c2},${c3})`
}


Array.from(boxes).forEach(e=>{
    // console.log(e)
    e.style.backgroundColor=getRandomColor()
    e.style.color=getRandomColor()
})
