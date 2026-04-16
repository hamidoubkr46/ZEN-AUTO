/* Logique ZEN AUTO */
document.addEventListener('DOMContentLoaded', () => {
    console.log("Système ZEN AUTO initialisé...");

    // Gestion du clic sur les boutons de réservation
    const buttons = document.querySelectorAll('.btn-main');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Si c'est un bouton dans une carte de la boutique
            if(btn.innerText === "Détails" || btn.innerText === "Envoyer") {
                alert("Félicitations ! Un agent ZEN AUTO va vous rappeler pour finaliser votre projet.");
            }
        });
    });
});
