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
    // 1. UI Feedback: Update active class in the list
    document.querySelectorAll('.asset-row').forEach(r => r.classList.remove('active'));
    row.classList.add('active');

    // 2. Update State: Store paths for the toggle buttons
    currentProject.final = finalImg;
    currentProject.clay = clayImg;

    // 3. Update Content: Change the main display area
    const displayImg = document.getElementById('displayImg');
    
    // Simple fade transition
    displayImg.style.opacity = '0.2';
    
    setTimeout(() => {
        displayImg.src = finalImg; // Always default to 'Final' view on new selection
        document.getElementById('displayTitle').innerText = title;
        document.getElementById('displaySoft').innerText = software;
        document.getElementById('displayDesc').innerText = desc;
        
        // Reset toggle buttons to show 'Final' is active
        document.getElementById('btnFinal').classList.add('active');
        document.getElementById('btnClay').classList.remove('active');
        
        displayImg.style.opacity = '1';
    }, 200);
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