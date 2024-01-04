window.addEventListener('load', function() {
    var pane = document.getElementsByClassName('center-text')[0];
    var mesh = document.getElementById('meshGradient');
    if(window.innerHeight > pane.offsetHeight){
        mesh.style.height = window.innerHeight + 'px';
    } else {
    mesh.style.height = pane.offsetHeight + 'px';
    }
    if(mesh.offsetWidth <= pane.offsetWidth){
        mesh.style.width = 120 + 'vw';
    }
    else{
        mesh.offsetWidth = mesh.style.width = window.innerWidth + 'px';
    }
 });

window.addEventListener('resize', function() {
    var pane = document.getElementsByClassName('center-text')[0];
    var mesh = document.getElementById('meshGradient');
    if(window.innerHeight > pane.offsetHeight){
        mesh.style.height = window.innerHeight + 'px';
    } else {
    mesh.style.height = pane.offsetHeight + 'px';
    }
    if(mesh.offsetWidth <= pane.offsetWidth){
        mesh.style.width = 120 + 'vw';
    }
    else{
        mesh.offsetWidth = mesh.style.width = window.innerWidth + 'px';
    }
});
