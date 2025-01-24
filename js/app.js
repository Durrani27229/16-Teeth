const physicalButton = () => {
    const physicalBtn = document.getElementById("physical-btn");
    physicalBtn.style.backgroundColor = "#000000";
    physicalBtn.style.color = "#ffffff";
    const onlineBtn = document.getElementById("online-btn");
    onlineBtn.style.backgroundColor = "#ffffff";
    onlineBtn.style.color = "#000000";
}

const onlineButton = () => {
    const onlineBtn = document.getElementById("online-btn");
    onlineBtn.style.backgroundColor = "#000000";
    onlineBtn.style.color = "#ffffff";
    const physicalBtn = document.getElementById("physical-btn");
    physicalBtn.style.backgroundColor = "#ffffff";
    physicalBtn.style.color = "#000000";
}




// const editBtn = document.getElementById("edit");
// console.log(editBtn);



// editBtn.addEventListener("click", () => {
//     const editCart = document.getElementById("edit");
//     editCart.style.display = "block";
// })