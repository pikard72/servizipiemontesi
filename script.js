function showSection(sectionId) {
    // Nascondi tutte le sezioni
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostra solo la sezione selezionata
    let sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}
