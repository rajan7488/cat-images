let btnLeft=document.querySelector(".btn-left");
let btnRight=document.querySelector(".btn-right");
let image=document.querySelector(".image");
console.log(image)

const images=[
    "images/images.jpeg",
    "images/images 3.jpeg",
    "images/images2.jpg",
    "images/images4.jpeg"
];

let currIndex=0;

const updatedImage=()=>{
    image.style.opacity=0;
    setTimeout(()=>{
        image.src=images[currIndex];
        image.style.opacity = 1;
    },500);
};

const imageleftMove=()=>{
    currIndex=(currIndex-1+images.length)%images.length;
    updatedImage();
};

const imagerightMove=()=>{
    currIndex=(currIndex+1)%images.length;
    updatedImage();
}
// imageleftMove();
// imagerightMove();
btnLeft.addEventListener("click",imageleftMove);
btnRight.addEventListener("click",imagerightMove);

