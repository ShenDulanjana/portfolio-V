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
    // 1. UI Feedback: Update active class in the list immediately
    document.querySelectorAll('.asset-row').forEach(r => r.classList.remove('active'));
    row.classList.add('active');

    // 2. State Update: Store paths
    currentProject.final = finalImg;
    currentProject.clay = clayImg;

    // 3. THE FIX: Background Preloading
    // This starts downloading the Clay version immediately so the toggle is instant later
    const preloadClay = new Image();
    preloadClay.src = clayImg;

    const displayImg = document.getElementById('displayImg');
    
    // 4. Smooth Transition Logic
    displayImg.style.opacity = '0.1'; // Drop opacity to hide the "pop"
    
    // Create a temporary image to check when the NEW "Final" image is actually ready
    const tempImg = new Image();
    tempImg.src = finalImg;
    
    tempImg.onload = () => {
        // Only update the UI once the file has actually finished downloading
        displayImg.src = finalImg; 
        
        document.getElementById('displayTitle').innerText = title;
        document.getElementById('displaySoft').innerText = software;
        document.getElementById('displayDesc').innerText = desc;
        
        // Reset toggle buttons
        document.getElementById('btnFinal').classList.add('active');
        document.getElementById('btnClay').classList.remove('active');
        
        displayImg.style.opacity = '1'; // Fade back in smoothly
    };

    // Error handling: if image fails to load, don't leave the screen dark
    tempImg.onerror = () => {
        displayImg.style.opacity = '1';
        console.error("Failed to load asset path: " + finalImg);
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
