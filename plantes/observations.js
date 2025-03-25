document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("observation-form");
    const observationInput = document.getElementById("observation");
    const observationsList = document.getElementById("observations-list");

    // Charger les observations stockées
    function loadObservations() {
        const savedObservations = JSON.parse(localStorage.getItem("tulipeObservations")) || [];
        observationsList.innerHTML = ""; // Réinitialiser la liste
        savedObservations.forEach(obs => {
            const li = document.createElement("li");
            li.textContent = obs;
            observationsList.appendChild(li);
        });
    }

    // Sauvegarder une nouvelle observation
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const observationText = observationInput.value.trim();
        if (observationText === "") return;

        // Récupérer les anciennes observations et ajouter la nouvelle
        const savedObservations = JSON.parse(localStorage.getItem("tulipeObservations")) || [];
        savedObservations.push(observationText);
        localStorage.setItem("tulipeObservations", JSON.stringify(savedObservations));

        observationInput.value = ""; // Réinitialiser le champ
        loadObservations(); // Recharger la liste
    });

    // Charger les observations au démarrage
    loadObservations();
});
