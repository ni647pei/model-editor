// Switch views for the selected object

function PerspectiveView(){

    var camera = editor.camera;
    var pi = Math.PI/180;
    var object = editor.selected;
    var position = new THREE.Vector3();
    
    if( object !== null && object.parent !== null){

        camera.position.set(position.setFromMatrixPosition( object.matrixWorld ).x + 13245, position.setFromMatrixPosition( object.matrixWorld ).y - 11720, position.setFromMatrixPosition( object.matrixWorld ).z + 11880);

    }else{

        camera.position.set(13245, -11720, 11880);
    }

    camera.rotation.set(45 * pi, 38 * pi, 30 * pi);
    editor.signals.cameraChanged.dispatch( camera );
}


function frontView(){

    var camera = editor.camera;
    var object = editor.selected;
    var position = new THREE.Vector3();
    
    if( object !== null && object.parent !== null){

        camera.position.set(position.setFromMatrixPosition( object.matrixWorld ).x, -20000, position.setFromMatrixPosition( object.matrixWorld ).z);

    }else{

        camera.position.set(0, -20000, 0);
    }

    camera.rotation.set(Math.PI/2, 0, 0);
    editor.signals.cameraChanged.dispatch( camera );
}

function topView(){
    
    var camera = editor.camera;
    var object = editor.selected;
    var position = new THREE.Vector3();
    
    if( object !== null && object.parent !== null){
        
        camera.position.set(position.setFromMatrixPosition( object.matrixWorld ).x, position.setFromMatrixPosition( object.matrixWorld ).y, 20000);
        
    }else{
        
        camera.position.set(0, 0, 20000);  
    }
    
    camera.rotation.set(0, 0, 0);
    editor.signals.cameraChanged.dispatch( camera );
}

function rightView(){

    var camera = editor.camera;
    var object = editor.selected;
    var position = new THREE.Vector3();
    
    if( object !== null && object.parent !== null){

        camera.position.set(20000, position.setFromMatrixPosition( object.matrixWorld ).y, position.setFromMatrixPosition( object.matrixWorld ).z);

    }else{

        camera.position.set(20000, 0, 0);
    }

    camera.rotation.set(-Math.PI/2, Math.PI/2, Math.PI);
    editor.signals.cameraChanged.dispatch( camera );

}

function leftView(){

    var camera = editor.camera;
    var object = editor.selected;
    var position = new THREE.Vector3();

    if( object !== null && object.parent !== null){

        camera.position.set(-20000, position.setFromMatrixPosition( object.matrixWorld ).y, position.setFromMatrixPosition( object.matrixWorld ).z);

    }else{

        camera.position.set(-20000, 0, 0);
    }

    camera.rotation.set(-Math.PI/2, -Math.PI/2, -Math.PI);
    editor.signals.cameraChanged.dispatch( camera );
}

function bottomView(){

    var camera = editor.camera;
    var object = editor.selected;
    var position = new THREE.Vector3();

    if( object !== null && object.parent !== null){

        camera.position.set(position.setFromMatrixPosition( object.matrixWorld ).x, position.setFromMatrixPosition( object.matrixWorld ).y, -20000);

    }else{

        camera.position.set(0, 0, -20000);
    }

    camera.rotation.set(Math.PI, 0, 0);
    editor.signals.cameraChanged.dispatch( camera );
}

function backView(){

    var camera = editor.camera;
    var object = editor.selected;
    var position = new THREE.Vector3();

    if( object !== null && object.parent !== null){

        camera.position.set(position.setFromMatrixPosition( object.matrixWorld ).x, 20000, position.setFromMatrixPosition( object.matrixWorld ).z);

    }else{

        camera.position.set(0, 20000, 0);
    }

    camera.rotation.set(-Math.PI/2, 0, Math.PI);
    editor.signals.cameraChanged.dispatch( camera );
}