let rightbuilding=document.getElementById('building_right');
let leftbuilding=document.getElementById('building_left');
let rightcloud=document.getElementById('cloud_right');
let leftcloud=document.getElementById('cloudleft');
let text=document.getElementById('text');
let mountain=document.getElementById('mountain');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    rightcloud.style.left=value * 2 + 'px';
    text.style.marginTop= value * 2.5 + 'px';
    rightbuilding.style.left=value * 1 + 'px';
    leftbuilding.style.left=value * -1 + 'px';
    leftcloud.style.left=value * -2 + 'px';
    mountain.style.marginTop=value * 0.5 + 'px';




})