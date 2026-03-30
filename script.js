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
    // 1. UI Updates
    document.querySelectorAll('.asset-row').forEach(r => r.classList.remove('active'));
    row.classList.add('active');

    currentProject.final = finalImg;
    currentProject.clay = clayImg;

    const displayImg = document.getElementById('displayImg');
    const loader = document.getElementById('loader');
    
    // 2. SHOW LOADING UI
    displayImg.style.opacity = '0'; // Hide the old image
    loader.style.display = 'flex'; // Show the spinner

    // 3. PRELOAD LOGIC
    const tempImg = new Image();
    tempImg.src = finalImg;

    tempImg.onload = () => {
        // Only run this when the new image is 100% ready
        displayImg.src = finalImg;
        
        document.getElementById('displayTitle').innerText = title;
        document.getElementById('displaySoft').innerText = software;
        document.getElementById('displayDesc').innerText = desc;
        
        // 4. HIDE LOADING UI
        loader.style.display = 'none';
        displayImg.style.opacity = '1';
        
        document.getElementById('btnFinal').classList.add('active');
        document.getElementById('btnClay').classList.remove('active');
    };
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
