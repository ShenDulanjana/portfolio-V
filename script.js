/**
 * GLOBAL STATE
 * Keeps track of the currently selected project's image paths
 * so the toggleView function knows what to show.
 */
let currentProject = {
    final: 'assets/artstationcover.png',
    clay: 'assets/rahathhimuwarumat.jpg'
};

/**
 * INSPECT FUNCTION
 * Triggered when clicking a row in the left-hand list.
 */
function inspect(row, finalImg, clayImg, title, software, desc) {
    // ... your existing code to update active classes ...

    currentData.final = finalImg;
    currentData.clay = clayImg;

    // PRELOAD: Create hidden image objects to start the download immediately
    const img1 = new Image();
    img1.src = finalImg;
    const img2 = new Image();
    img2.src = clayImg;

    // Update the main display
    const img = document.getElementById('displayImg');
    img.src = finalImg;
    
    // Update text details
    document.getElementById('displayTitle').innerText = title;
    document.getElementById('displaySoft').innerText = software;
    document.getElementById('displayDesc').innerText = desc;
}
/**
 * TOGGLE VIEW FUNCTION
 * Triggered when clicking 'FINAL' or 'CLAY' buttons on the image.
 */
function toggleView(mode) {
    const displayImg = document.getElementById('displayImg');
    const btnFinal = document.getElementById('btnFinal');
    const btnClay = document.getElementById('btnClay');

    if (mode === 'final') {
        displayImg.src = currentProject.final;
        btnFinal.classList.add('active');
        btnClay.classList.remove('active');
    } else if (mode === 'clay') {
        displayImg.src = currentProject.clay;
        btnFinal.classList.remove('active');
        btnClay.classList.add('active');
    }
}
