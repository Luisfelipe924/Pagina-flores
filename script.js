document.getElementById("login-btn").addEventListener("click", function () {
    alert("Bienvenido a la tienda de flores");
});

const enviarFlores = document.getElementById("enviar-flores");
enviarFlores.addEventListener("mouseover", () => {
    enviarFlores.textContent = "Envia Bouquets";
});

enviarFlores.addEventListener("mouseout", () => {
    enviarFlores.textContent = "Envia Flores";
});

document.querySelectorAll(".comprar").forEach(btn => {
    btn.addEventListener("click", function() {
        this.style.display = "none"; // hace desaparecer el boton
    });
});