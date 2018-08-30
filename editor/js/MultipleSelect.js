// Multiple selection when Ctrl-click

var editor = new Editor();

var tempGroup = new THREE.Object3D(); // Create a temporary group for the selected objects
var scene = editor.scene;


document.addEventListener('click', function (event) {

    var object = editor.selected;
    var children = tempGroup.children;
    //var groupPosition = new THREE.Vector3();
    
    updatePanel();

    if (event.ctrlKey || event.shiftKey) {

        var objectParent = object.parent;

        if (objectParent !== null) {

            var lastChild = children[children.length];
            
            editor.execute(new MoveObjectCommand(object, tempGroup, lastChild));
            tempGroup.name = 'Selected';

            objectParent.add(tempGroup);

            editor.signals.objectAdded.dispatch(tempGroup);
            
            editor.signals.sceneGraphChanged.dispatch();

            tempGroup.position.set(0, 0, 0);

            editor.select(tempGroup);
            
            updatePanel();

        }

        
        // Please make the function below happen!!!

        // Show each object's boxHelper while selected in group
        /*
                var box = new THREE.Box3();
                box.setFromObject( tempGroup );
                var offset = box.getCenter();
                var newPosition = tempGroup.position.clone();
                newPosition.sub( offset );
                editor.execute( new SetPositionCommand( tempGroup, newPosition ) );
                */

        // Deselect object if Ctrl + clicked again
        /*
                var raycaster = new THREE.Raycaster();
                var mouse = new THREE.Vector2();
                var camera = editor.camera;

                raycaster.setFromCamera(mouse, camera);

                var intersects = raycaster.intersectObjects(children);

                if (isChildOf(intersects, tempGroup)) {

                    editor.execute(new MoveObjectCommand(intersects, scene, tempGroup));

                }
                */

    }


    // Cancel selection while clicking elsewhere

    if (isChildOf(event.target, document.getElementById("viewport"))) {

        if (!event.ctrlKey && !event.shiftKey && object === null) {

            var tempParent = tempGroup.parent;

            updatePanel();

            children.forEach(function (child) {

                var newChildren = tempParent.children;
                newChildren.splice(newChildren.length, 0, child);
                child.parent = tempParent;
                this.editor.signals.sceneGraphChanged.dispatch();
                
                // to maitain the children's global position after they are removed from the group
                child.position.x = child.position.x + tempGroup.position.x;
                child.position.y = child.position.y + tempGroup.position.y;
                child.position.z = child.position.z + tempGroup.position.z;
                var newPosition = child.position.clone();

                editor.execute(new SetPositionCommand(child, newPosition));
                child.updateMatrixWorld( true );
                editor.signals.objectChanged.dispatch( child );

            });

            children.splice(0, children.length);
            if (tempGroup.parent !== null) editor.execute(new RemoveObjectCommand(tempGroup));
            
            
        }


    }

    function isChildOf(child, parent) {

        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }


});

function updatePanel() {

    // Toggle floating panel

    var object = editor.selected;

    

    if (object !== null) {

        if (object.type === 'Group') {

            document.getElementById("floatingPanel").style.display = "block";
            document.getElementById("confirmGroup").style.display = 'none';
            document.getElementById("unGroup").style.display = 'block';

        } else if (object.type === 'Object3D') {

            document.getElementById("floatingPanel").style.display = "block";
            document.getElementById("confirmGroup").style.display = 'block';
            document.getElementById("unGroup").style.display = 'none';

        } else {

            document.getElementById("floatingPanel").style.display = "none";
            document.getElementById("confirmGroup").style.display = 'block';
            document.getElementById("unGroup").style.display = 'none';
        }
    }else{
        
        document.getElementById("floatingPanel").style.display = "none";
        document.getElementById("confirmGroup").style.display = 'block';
        document.getElementById("unGroup").style.display = 'none';
    }

}
