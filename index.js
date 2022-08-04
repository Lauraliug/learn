const inputTall1 = document.querySelector("#inputTall1");
const inputTall2 = document.querySelector("#inputTall2");
const svar = document.querySelector("#txtSvar");
const valgtArt = document.querySelector("#valgtArt");

const regnUt = () => {
    const tall1 = Number(inputTall1.value);
    const tall2 = Number(inputTall2.value);
    const valg = valgtArt.value;

    let svar;

    if (valg === "+") {
        svar = tall1 + tall2;
    } else if (valg === "-") {
        svar = tall1 - tall2;
    } else if (valg === "*") {
        svar = tall1 * tall2;
    } else if (valg === ":") {
        svar = tall1 / tall2;
    }

    txtSvar.innerHTML = svar.toFixed(2);
};

inputTall1.oninput = regnUt;
inputTall2.oninput = regnUt;
valgtArt.onchange = regnUt;
