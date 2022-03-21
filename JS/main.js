const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

$(document).ready(function() {
    $('.carousel').carousel({
      interval: 1200
    })
});