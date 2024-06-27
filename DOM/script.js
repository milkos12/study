console.log("Hola.............")
let boton = document.getElementById("hola")

boton.addEventListener("click", ()=>{
    let div = document.getElementById("nuevosDiv");
    const newDiv = document.createElement("div")
    newDiv.style.width = "50px"
    newDiv.style.height = "50px";
    newDiv.style.backgroundColor = "blue"

    div.append(newDiv);
});