const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
    "yellow",
    "black",
    "green",
    "#327ba8",
    "#a8327b",
    "#6b495e",
    "#49536b"
]

button.addEventListener("click", changeBackground);

let sayi = 0;

function changeBackground() {

    // rastgele seçilen renk

    // const rastgeleRenk = Math.floor(Math.random() * colors.length);
    // const secilenRenk = colors[rastgeleRenk];
    // console.log(rastgeleRenk, secilenRenk)
    // body.style.backgroundColor = secilenRenk;


    // sırayla seçilen renk 

    if (sayi == 7) sayi = 0;

    const secilenRenk = colors[sayi];
    sayi++;
    body.style.backgroundColor = secilenRenk
    console.log(secilenRenk)

}