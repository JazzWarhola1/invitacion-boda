function abrirInvitacion() {

    const contenido = document.getElementById("contenido");

    contenido.classList.add("visible");

    contenido.scrollIntoView({
        behavior: "smooth"
    });

}
