// console.log('hi');


// Heute werden wir einen Kalorienrechner programmieren. 
// Zuerst müssen wir den Grundumsatz berechnen. Der Grundumsatz wird anhand der Harris Benedict Formel berechnet.
// Grundumsatz bei Männern (Kalorien je Tag)
// 664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz
// Grundumsatz bei Frauen (Kalorien je Tag)
// 655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz

// ! Das Ergebnis wird in Kilokalorien ausgegeben.

// Schlafen
// 0,95
// Nur Sitzen oder Liegen
// 1,2
// Ausschließlich sitzende Tätigkeit mit wenig oder keiner körperlichen Aktivität in der Freizeit, z.B. Büroarbeit
// 1,5
// Sitzende Tätigkeit mit zeitweilig gehender oder stehender Tätigkeit, z.B. Studierende, Fließbandarbeiter, Laboranten, Kraftfahrer
// 1,7
// Überwiegend gehende oder stehende Tätigkeit, z.B. Verkäufer, Kellner, Handwerker, Mechaniker, Hausfrauen
// 1,9
// Körperlich anstrengende berufliche Arbeit
// 2,2

let weiblich = document.getElementById("weiblich");
let männlich = document.getElementById("männlich");
let alter = document.getElementById("alter");
let groesse = document.getElementById("groesse");
let gewicht = document.getElementById("gewicht");
let zeitvertreib = document.getElementById("zeitvertreib");
let grUkcal = document.getElementById("grUkcal");
let grUkj = document.getElementById("grUkj");
let gUkcal = document.getElementById("gUkcal");
let gUkj = document.getElementById("gUkj");

// console.log(zeitvertreib.value)

let berechne = () => {

    // console.log(zeitvertreib.value);

    let alterInput = Number(alter.value);
    let groesseInput = Number(groesse.value);
    let gewichtInput = Number(gewicht.value);
    // console.log(gewichtInput);
    // console.log(alterInput);
    // console.log(groesseInput);
    // console.log(weiblich.checked);
    if (weiblich.checked == true) {
        // console.log("Du bist eine Frau")

        let grUFrau = 655.1 + (9.6 * gewichtInput) + (1.8 * groesseInput) - (4.7 * alterInput)
        // console.log(grUFrau);
        grUkcal.innerHTML = grUFrau;

        let kjgrUFrau = grUFrau * 4.1868;
        grUkj.innerHTML = kjgrUFrau.toFixed(2);

        if (zeitvertreib.value == 1) {

            let gUFrau = grUFrau * 0.95;
            gUkcal.innerHTML = gUFrau.toFixed(2);

            let kjgUFrau = gUFrau * 4.1868;
            gUkj.innerHTML = kjgUFrau.toFixed(2);

        }

        else if (zeitvertreib.value == 2) {

            let gUFrau = grUFrau * 1.2;
            gUkcal.innerHTML = gUFrau.toFixed(2);

            let kjgUFrau = gUFrau * 4.1868;
            gUkj.innerHTML = kjgUFrau.toFixed(2);

        }

        else if (zeitvertreib.value == 3) {

            let gUFrau = grUFrau * 1.5;
            gUkcal.innerHTML = gUFrau.toFixed(2);

            let kjgUFrau = gUFrau * 4.1868;
            gUkj.innerHTML = kjgUFrau.toFixed(2);

        }

        else if (zeitvertreib.value == 4) {

            let gUFrau = grUFrau * 1.7;
            gUkcal.innerHTML = gUFrau.toFixed(2);

            let kjgUFrau = gUFrau * 4.1868;
            gUkj.innerHTML = kjgUFrau.toFixed(2);

        }

        else if (zeitvertreib.value == 5) {

            let gUFrau = grUFrau * 1.9;
            gUkcal.innerHTML = gUFrau.toFixed(2);

            let kjgUFrau = gUFrau * 4.1868;
            gUkj.innerHTML = kjgUFrau.toFixed(2);

        }

        else if (zeitvertreib.value == 6) {
            let gUFrau = grUFrau * 2.2;
            gUkcal.innerHTML = gUFrau.toFixed(2);

            let kjgUFrau = gUFrau * 4.1868;
            gUkj.innerHTML = kjgUFrau.toFixed(2);
        }
    }

    else if (männlich.checked == true) {
        // console.log("Du bist ein Mann")
        let grUMann = 664.7 + (13.7 * gewichtInput) + (5 * groesseInput) - (6.8 * alterInput)
        grUkcal.innerHTML = grUMann;

        let kjgrUMann = grUMann * 4.1868;
        grUkj.innerHTML = kjgrUMann.toFixed(2);

        if (zeitvertreib.value == 1) {

            let gUMann = grUMann * 0.95;
            gUkcal.innerHTML = gUMann.toFixed(2);

            let kjgUMann = gUMann * 4.1868;
            gUkj.innerHTML = kjgUMann.toFixed(2);

        }

        else if (zeitvertreib.value == 2) {

            let gUMann = grUMann * 1.2;
            gUkcal.innerHTML = gUMann.toFixed(2);

            let kjgUMann = gUMann * 4.1868;
            gUkj.innerHTML = kjgUMann.toFixed(2);

        }

        else if (zeitvertreib.value == 3) {

            let gUMann = grUMann * 1.5;
            gUkcal.innerHTML = gUMann.toFixed(2);

            let kjgUMann = gUMann * 4.1868;
            gUkj.innerHTML = kjgUMann.toFixed(2);

        }

        else if (zeitvertreib.value == 4) {

            let gUMann = grUMann * 1.7;
            gUkcal.innerHTML = gUMann.toFixed(2);

            let kjgUMann = gUMann * 4.1868;
            gUkj.innerHTML = kjgUMann.toFixed(2);

        }

        else if (zeitvertreib.value == 5) {

            let gUMann = grUMann * 1.9;
            gUkcal.innerHTML = gUMann.toFixed(2);

            let kjgUMann = gUMann * 4.1868;
            gUkj.innerHTML = kjgUMann.toFixed(2);

        }

        else if (zeitvertreib.value == 6) {
            let gUMann = grUMann * 2.2;
            gUkcal.innerHTML = gUMann.toFixed(2);

            let kjgUMann = gUMann * 4.1868;
            gUkj.innerHTML = kjgUMann.toFixed(2);
        }
    }
}
