

document.querySelectorAll(".posdiv").forEach((item)=>{
    item.addEventListener('click', function(){
        item.style.backgroundColor = "red";
    })
})
console.log(document.querySelectorAll(".posdiv"))