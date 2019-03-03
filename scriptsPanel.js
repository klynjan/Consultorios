// d-none en links
// hecho idxid, si se refactoriza juntar los ids correspondientes

function funcionLinkTicketsPublicos() {
    document.getElementById("linkTicketsPrivados").classList.remove('active');
    document.getElementById("linkTicketsPublicos").classList.add('active');
    document.getElementById("linkProfesionales").classList.remove('active');
    document.getElementById("linkConsultorios").classList.remove('active');
    document.getElementById("linkAlquileres").classList.remove('active');
    document.getElementById("linkDeudas").classList.remove('active');
    document.getElementById("seccionTickets").classList.remove('d-none');
    document.getElementById("seccionTicketsPublicos").classList.remove('d-none');
    document.getElementById("seccionTicketsPrivados").classList.add('d-none');
}

function funcionLinkTicketsPrivados() {
    document.getElementById("linkTicketsPrivados").classList.add('active');
    document.getElementById("linkTicketsPublicos").classList.remove('active');
    document.getElementById("linkProfesionales").classList.remove('active');
    document.getElementById("linkConsultorios").classList.remove('active');
    document.getElementById("linkAlquileres").classList.remove('active');
    document.getElementById("linkDeudas").classList.remove('active');
    document.getElementById("seccionTickets").classList.remove('d-none');
    document.getElementById("seccionTicketsPrivados").classList.remove('d-none');
    document.getElementById("seccionTicketsPublicos").classList.add('d-none');
}

function funcionLinkProfesionales() {
    document.getElementById("linkTicketsPrivados").classList.remove('active');
    document.getElementById("linkTicketsPublicos").classList.remove('active');
    document.getElementById("linkProfesionales").classList.add('active');
    document.getElementById("linkConsultorios").classList.remove('active');
    document.getElementById("linkAlquileres").classList.remove('active');
    document.getElementById("linkDeudas").classList.remove('active');
    document.getElementById("seccionTickets").classList.remove('d-none');
    document.getElementById("seccionTicketsPrivados").classList.remove('d-none');
    document.getElementById("seccionTicketsPublicos").classList.add('d-none');
}

function funcionLinkConsultorios() {
    document.getElementById("linkTicketsPrivados").classList.remove('active');
    document.getElementById("linkTicketsPublicos").classList.remove('active');
    document.getElementById("linkProfesionales").classList.remove('active');
    document.getElementById("linkConsultorios").classList.add('active');
    document.getElementById("linkAlquileres").classList.remove('active');
    document.getElementById("linkDeudas").classList.remove('active');
    document.getElementById("seccionTickets").classList.remove('d-none');
    document.getElementById("seccionTicketsPrivados").classList.remove('d-none');
    document.getElementById("seccionTicketsPublicos").classList.add('d-none');
}

function funcionLinkAlquileres() {
    document.getElementById("linkTicketsPrivados").classList.remove('active');
    document.getElementById("linkTicketsPublicos").classList.remove('active');
    document.getElementById("linkProfesionales").classList.remove('active');
    document.getElementById("linkConsultorios").classList.remove('active');
    document.getElementById("linkAlquileres").classList.add('active');
    document.getElementById("linkDeudas").classList.remove('active');
    document.getElementById("seccionTickets").classList.add('d-none');
    document.getElementById("seccionAlquileres").classList.remove('d-none');
}

function funcionLinkDeudas() {
    document.getElementById("linkTicketsPrivados").classList.remove('active');
    document.getElementById("linkTicketsPublicos").classList.remove('active');
    document.getElementById("linkProfesionales").classList.remove('active');
    document.getElementById("linkConsultorios").classList.remove('active');
    document.getElementById("linkAlquileres").classList.remove('active');
    document.getElementById("linkDeudas").classList.add('active');
}