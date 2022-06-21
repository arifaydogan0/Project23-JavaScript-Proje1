
let name = prompt("Lütfen İsminizi Giriniz..");
while (name == '' || name == null) {
    name = prompt("Lütfen Geçerli Bir İsim Giriniz..");
}
document.querySelector('#myName').innerHTML = name;

let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

function tarihSaat() {
    var d = new Date();
    document.querySelector('#myDate').innerHTML = d.toLocaleTimeString() + " " +
        gunler[d.getDay()];
}

tarihSaat();
setInterval(tarihSaat, 111);