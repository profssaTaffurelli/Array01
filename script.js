function creaArray() {
    let n = parseInt(document.getElementById("numeroElementi").value);

    let array = [];

    for (let i = 0; i < n; i++) {
        let valore = prompt("Inserisci l'elemento n° " + (i + 1));
        array.push(valore);
    }

    document.getElementById("risultato").innerHTML =
        "Hai inserito: " + array.join(", ");
}
