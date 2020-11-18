function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, nota;


    /*SE EVALUA PREGUNTA 1*/
    if (document.getElementById('p11').checked == true) {
        p1 = 1
    }
    if (p1 == 1) {
        document.querySelectorAll('.pregunta1')[0].style.color = '#00FF00'
    }
    else {
        p1 = 0
    }

    /*SE EVALUA PREGUNTA 2*/
    if (document.getElementById('p22').checked == true) {
        p2 = 1
    }
    if (p2 == 1) {
        document.querySelectorAll('.pregunta2')[1].style.color = '#00FF00'
    }
    else {
        p2 = 0
    }

    /*SE EVALUA PREGUNTA 3*/
    if (document.getElementById('p33').checked == true) {
        p3 = 1
    }
    if (p3 == 1) {
        document.querySelectorAll('.pregunta3')[2].style.color = '#00FF00'
    }
    else {
        p3 = 0
    }

    /*SE EVALUA PREGUNTA 4*/
    if (document.getElementById('p44').checked == true) {
        p4 = 1
    }
    if (p4 == 1) {
        document.querySelectorAll('.pregunta4')[3].style.color = '#00FF00'
    }
    else {
        p4 = 0
    }

    /*SE EVALUA PREGUNTA 5*/
    if (document.getElementById('p52').checked == true) {
        p5 = 1
    }
    if (p5 == 1) {
        document.querySelectorAll('.pregunta5')[1].style.color = '#00FF00'
    }
    else {
        p5 = 0
    }

    /*SE EVALUA PREGUNTA 6*/
    if (document.getElementById('p61').checked == true) {
        p6 = 1
    }
    if (p6 == 1) {
        document.querySelectorAll('.pregunta6')[0].style.color = '#00FF00'
    }
    else {
        p6 = 0
    }

    /*SE EVALUA PREGUNTA 7*/
    if (document.getElementById('p74').checked == true) {
        p7 = 1
    }
    if (p7 == 1) {
        document.querySelectorAll('.pregunta7')[3].style.color = '#00FF00'
    }
    else {
        p7 = 0
    }

    /*OPERACIÓN PARA OBTENER NOTA*/
    nota = p1 + p2 + p3 + p4 + p5 + p6 + p7;

    /*CONDICIONAL DE MENSAJE ADICIONAL*/
    if (nota == 7) {
        msj = ".   |   Felicidades! eres todo un Potterhead. &#129497;"
    }
    else if (nota <= 6 && nota >= 4) {
        msj = ".   |   Nada mal, pero te hace falta ver más Harry Potter. &#128527;"
    } else {
        msj = ".   |   Ummm! Ni a Muggle llegas. &#128514"
    }

    /*CONCATENACIÓN MENSAJE FINAL*/
    document.getElementById('resultado').innerHTML = "Aciertos: " + nota + msj;

    /*MENSAJE EMERGENTE DE CONFIRMACIÓN*/
    rs = confirm("¿Ya haz finalizado?");
    if (rs == false) {
        document.forms[0].reset(); location.reload()
    }
}