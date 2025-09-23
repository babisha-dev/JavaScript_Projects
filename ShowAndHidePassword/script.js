let input = document.getElementById("passes");
let btn = document.getElementById("eye-icon");
btn.addEventListener("click", function() {
    if (input.type === "password") {
        input.type = "text";
        btn.textContent = "Hide";
    }
    else {
        input.type = "password";
        btn.textContent = "👁️";
    }
})