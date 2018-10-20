const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});

const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}

const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            document.querySelector("#cant").value = item.childNodes[3].textContent;
        });
    })
}

const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}

var first_field = document.getElementById("fecha");

first_field.oninput = () => {
    var valor = first_field.value;
    if (valor == "" || valor == null) first_field.style.borderColor = "red";
    else first_field.style.borderColor = "green";
}

var second_element = document.getElementById("descp");

second_element.oninput = () => {
    var valor = second_element.value;
    if (valor == "" || valor == null) second_element.style.borderColor = "red";
    else second_element.style.borderColor = "green";
}

var last_element = document.getElementById("cant");

last_element.oninput = () => {
    var valor = last_element.value;
    if (valor == "" || valor == null) last_element.style.borderColor = "red";
    else last_element.style.borderColor = "green";
}

var boton = document.querySelector(".formulario input[type = submit]");

function enviar(){
    if(!isNaN(first_field.value)){
        alert('Debe elegir una fecha');
        boton.disabled = true;
        return false;
    }

    if(second_field.value == null || second_field.value.length == 0 || second_field.value == ""){
        alert('El campo no debe ir vacío');
        return false;
    }

    if(last_field.value == null || last_field.value.length == 0 || last_field.value == "" ){
        alert('El campo no debe ir vacío');
        return false;
    }

    boton.disabled = false;
    return true;

}


