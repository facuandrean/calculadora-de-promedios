const promedio = (notaTp1, notaTp2, notaFinal) => {
    let prom = (notaTp1 + notaTp2 + notaFinal) / 3;
    return prom;
}

let btnAccept = document.getElementById("btn-accept");

btnAccept.addEventListener('click', () => {
    let notaTp1 = parseInt(document.getElementById("nota-tp1").value);
    let notaTp2 = parseInt(document.getElementById("nota-tp2").value);
    let notaFinal = parseInt(document.getElementById("nota-final").value);

    let prom = promedio(notaTp1, notaTp2, notaFinal);

    let resultados = document.getElementById('resultados');
    resultados.innerHTML = Math.trunc(prom);

    let condicion = document.getElementById('condicion')
    if (prom >= 7) {
        condicion.innerHTML = "Aprobado"
    } else {
        condicion.innerHTML = "Reprobado"
    };
});

let btnCancel = document.getElementById("btn-cancel");

btnCancel.addEventListener("click", () => {
    location.reload()
})