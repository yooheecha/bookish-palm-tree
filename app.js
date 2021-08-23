const button = document.querySelector(".morning");
const hidden = document.querySelector(".hidden");

function handleBtnSubmit(event) {

    if (hidden.className === "shown") {
        hidden.className = "hidden";
    } else {
        hidden.className = "shown";
    }
}


button.addEventListener ("click", handleBtnSubmit);