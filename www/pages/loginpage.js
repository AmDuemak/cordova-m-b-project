document.getElementById("accN").addEventListener("change", ACNo);
function ACNo(n) {
    var accN = n.target.value;
}

document.getElementById("register").addEventListener("click", NavPageR);
function NavPageR() {
    window.location = "signuppage.html";
}

document.getElementById("sub").addEventListener("click", NavPageH);
function NavPageH() {
    window.location = "homepage.html";
}