// Left Menu

function openMenu() {
    document.getElementById("leftmenu").style.width = "230px";
    document.getElementById("addGroup").style.width = "182px";
    var shapes = document.getElementsByClassName('shape');
    for (var i = 0; i < shapes.length; ++i) {
        var item = shapes[i];
        item.style.transition = "0.4s";
        item.style.width = "80px";
    }

    document.getElementById("info").style.marginLeft = "240px";
}

function closeMenu() {
    document.getElementById("leftmenu").style.width = "15px";
    document.getElementById("addGroup").style.width = "0";
    var shapes = document.getElementsByClassName('shape');
    for (var i = 0; i < shapes.length; ++i) {
        var item = shapes[i];
        item.style.transition = "0.2s";
        item.style.width = "0";
    }

    document.getElementById("info").style.marginLeft = "20px";
}
