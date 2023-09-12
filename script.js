function showProjectDetails(projectId) {
    var modal = document.getElementById("projectModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Schließen des Modals, wenn außerhalb geklickt wird
window.onclick = function(event) {
    var modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}