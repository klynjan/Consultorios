// d-none en secciones
// active en links

function linksNonActiveAll() {
    document.getElementById("linkTicketsPrivados").classList.remove('active');
    document.getElementById("linkTicketsPublicos").classList.remove('active');
    document.getElementById("linkProfesionales").classList.remove('active');
    document.getElementById("linkConsultorios").classList.remove('active');
    document.getElementById("linkAlquileres").classList.remove('active');
    document.getElementById("linkDeudas").classList.remove('active');
}

function seccionDnoneAll() {
    document.getElementById("seccionTickets").classList.add('d-none');
    document.getElementById("seccionTicketsPublicos").classList.add('d-none');
    document.getElementById("seccionTicketsPrivados").classList.add('d-none');
    document.getElementById("seccionAlquileres").classList.add('d-none');
}

function funcionLinkTicketsPublicos() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkTicketsPublicos").classList.add('active');
    document.getElementById("seccionTickets").classList.remove('d-none');
    document.getElementById("seccionTicketsPublicos").classList.remove('d-none');
}

function funcionLinkTicketsPrivados() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkTicketsPrivados").classList.add('active');
    document.getElementById("seccionTickets").classList.remove('d-none');
    document.getElementById("seccionTicketsPrivados").classList.remove('d-none');
}

function funcionLinkProfesionales() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkProfesionales").classList.add('active');
}

function funcionLinkConsultorios() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkConsultorios").classList.add('active');
}

function funcionLinkAlquileres() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkAlquileres").classList.add('active');
    document.getElementById("seccionAlquileres").classList.remove('d-none');
}

function funcionLinkDeudas() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkDeudas").classList.add('active');
}