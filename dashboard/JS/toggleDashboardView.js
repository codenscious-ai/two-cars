var start = document.getElementById('start');
var running = document.getElementById('running');
var end = document.getElementById('end');


function toggleDashboardView(gameState) {
    if (gameState == 'start') {
        start.style.display = 'block'; 
        running.style.display = 'none'; 
        end.style.display = 'none'; 
    }
    else if (gameState == 'running') {
        start.style.display = 'none'; 
        running.style.display = 'block'; 
        end.style.display = 'none'; 
    }
    else if (gameState == 'end') {
        start.style.display = 'none'; 
        running.style.display = 'none'; 
        end.style.display = 'block'; 
    }
}
// run this code when dom has loaded
toggleDashboardView(gameState = 'start')