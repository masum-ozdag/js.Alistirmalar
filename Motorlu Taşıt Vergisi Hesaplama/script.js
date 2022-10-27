function yillar() {

    for (let i = 2022; i >= 1920; i--) {
        let secenek = document.createElement("option");
        document.getElementById("aracYili").options.add(secenek);
        secenek.value = i;
        secenek.text = i;
    }

}

function vergiyiHesapla() {
    let aracTipi, aracGucu, aracYili;
    let odenecekVergi;
    var i;

    //1. Döngü bloğu-araç tipi seçimini alma

    for (i = 0; i < document.getElementById("aracTipi").length; i++) {
        //otions[i].selected (yani i'inci sıradakini seç diyoruz )
        if (document.getElementById("aracTipi").options[i].selected) {
            aracTipi = document.getElementById("aracTipi").options[i].value;
        }
        console.log(aracGucu);
    }

    //2.Döngü bloğu-araç gücü seçimini alma

    for (i = 0; i < document.getElementsByName("motorGucu").length; i++) {
        //otions[i].selected (yani i'inci sıradakini seç diyoruz )
        if (document.getElementsByName("motorGucu")[i].checked) {
            aracGucu = document.getElementsByName("motorGucu")[i].value;
        }


        console.log(aracGucu);
    }

    //3.Döngü bloğu-araç yıl seçimini alma

    for (i = 0; i < document.getElementById("aracYili").length; i++) {

        if (document.getElementById("aracYili").options[i].selected) {
            aracYili = document.getElementById("aracYili").options[i].value;
        }
        console.log(aracYili);
    }


    // 1. Kontrol bloğu araç tipine göre ücret alma

    if (aracTipi == "motor") {
        odenecekVergi = 100;
    }
    else if (aracTipi == "oto") {
        odenecekVergi = 200;
    }

    // 2. Kontrol bloğu araç motor gücüne göre ücret alma

    if (aracGucu = "1000cc-1600cc") {
        odenecekVergi == odenecekVergi + 50;
    }
    else if (aracGucu == "1601cc-2000cc") {
        odenecekVergi = odenecekVergi + 100;
    }
    else if (aracGucu == "2001cc") {
        odenecekVergi = odenecekVergi + 150;
    }

    // 3. Kontrol bloğu araç seçilen yıla göre indirim yapma

    if (aracYili <= 2005) {
        odenecekVergi = odenecekVergi - 25;
    }

    document.getElementById("sonuc").innerHTML = "Ödemeniz gereken vergi :" + odenecekVergi;

}