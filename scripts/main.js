window.onload = function() {
    var pane = document.getElementsByClassName('center-text')[0];
    var mesh = document.getElementById('meshGradient');
    if(window.innerHeight > pane.offsetHeight){
        mesh.style.height = window.innerHeight + 'px';
    } else {
    mesh.style.height = pane.offsetHeight + 'px';

    console.log(mesh.offsetHeight);
    console.log(pane.offsetHeight);
    console.log(window.innerHeight);
    console.log(document.getElementById('center')); 
    console.log(document.getElementById('meshGradient')); 
    }
 }

window.addEventListener('resize', function() {
    var pane = document.getElementsByClassName('center-text')[0];
    var mesh = document.getElementById('meshGradient');
    if(window.innerHeight > pane.offsetHeight){
        mesh.style.height = window.innerHeight + 'px';
    } else {
    mesh.style.height = pane.offsetHeight + 'px';
    console.log(mesh.offsetHeight);
    console.log(pane.offsetHeight);
    console.log(window.innerHeight);
    console.log(document.getElementById('center')); 
    console.log(document.getElementById('meshGradient')); 
    }
});