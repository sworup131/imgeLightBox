let img1=document.getElementById("img1")
let img2=document.getElementById("img2")
let img3=document.getElementById("img3")
let img=document.getElementById("images")
let blackPortion=document.getElementById("blackPortion")
let cross=document.getElementById("cross")
//let img12=document.getElementById("img12")



//instead of this we can use css to make this in a simpel way
 /*img1.addEventListener("mouseover",() =>{
    img1.style.opacity = 0.5;
})
img1.addEventListener("mouseout",() =>{
    img1.style.opacity = 1;
})*/
//this ko concept

img1.addEventListener("click",()=>{
    // created a image in JS rather than in html
    let img12=document.createElement("img")
    img12.src=img1.src;
    img12.id="img12"
    blackPortion.innerHtml=""

    blackPortion.append(img12)
    blackPortion.style.visibility = "visible";
    
    
});
img2.addEventListener("click",()=>{
    // created a image in JS rather than in html
    let img22=document.createElement("img")
    img22.src=img2.src;
    img22.id="img22"
    blackPortion.innerHtml=""
    blackPortion.append(img22)
    blackPortion.style.visibility = "visible";
    
    
});
img3.addEventListener("click",()=>{
    // created a image in JS rather than in html
    let img32=document.createElement("img")
    img32.src=img3.src;
    img32.id="img32"
    blackPortion.innerHtml=""

    blackPortion.append(img32)
    blackPortion.style.visibility = "visible";
    
    
});

cross.addEventListener("click",()=>{
     blackPortion.style.visibility = "hidden";
     img.style.visibility="visible";
})

