var b = 2;
let selectedTable = null;
document.querySelectorAll(".table-box").forEach(function (box) {
    box.addEventListener("click", function () {
        document.querySelectorAll(".table-box").forEach((el) =>
            el.classList.remove("active")
        );
        box.classList.add("active");
        selectedTable = box.dataset.num;
        document.getElementById("reserve").textContent =
            "You selected Table " + selectedTable + ".";
    });
});
var c = document.getElementById("cl");
var hd = document.getElementById("hdj");
var d = true;
var sh = document.getElementById("tbs");
var ri = document.getElementById("reservation-info")
hd.style.display = "flex";
c.addEventListener("click", function () {
    if (d) {
        hd.style.display = "none";
        c.style.top = "0";
        c.style.marginTop = "0";
        c.style.backgroundColor = "#F5E0C3";
        d = false;
    } else {
        hd.style.display = "flex";
        c.style.top = "70px";
        c.style.marginTop = "5px";
        c.style.backgroundColor = "#F5E0C3";
        d = true;
    }
});
setTimeout(function () {
    hd.style.display = "none";
    c.style.top = "0";
    c.style.marginTop = "0";
    c.style.backgroundColor = "#F5E0C3";
    d = false;
}, 3000);