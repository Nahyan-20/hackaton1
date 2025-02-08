var toggleButtone = document.getElementById('btn-up');
var skillse = document.getElementById('skills');
toggleButtone.addEventListener('click', function () {
    if (skillse.style.display === 'none') {
        skillse.style.display = 'block';
    }
    else {
        skillse.style.display = 'none';
    }
});
