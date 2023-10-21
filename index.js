let photos = document.querySelectorAll(".photo")
let counter = 0

for(let i = 0; i < photos.length;i++){
    photos[i].addEventListener("click", click)
}

function click(){
    if (counter % 2 == 0) scale(this)
    else reduction(this)
    counter++
}

function scale(photo){
    photo.style.height = "650px"
    photo.style.width = "650px"
    photo.style.position = "absolute"
    photo.style.top = "0"
    photo.style.left = "0"
}
function reduction(photo){
    photo.style.height = "200px"
    photo.style.width = "200px"
    setTimeout( function (){photo.style.position = "static"}, 1000)

}
