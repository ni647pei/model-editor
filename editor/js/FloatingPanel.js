// Useful floating Panel for the selected group


function alignZ() {

    var object = editor.selected;
    var children = object.children;

    if (children !== null) {

        for (var i in children) {

            children[i].position.x = children[0].position.x;
            children[i].position.y = children[0].position.y;
            var newPosition = children[i].position.clone();
            
            
            editor.execute(new SetPositionCommand(children[i], newPosition));
        }
        
        object.updateMatrixWorld( true );
        editor.signals.objectChanged.dispatch( object );

    }
}


function alignX() {

    var object = editor.selected;
    var children = object.children;

    if (children !== null) {

        for (var i in children) {

            children[i].position.y = children[0].position.y;
            children[i].position.z = children[0].position.z;
            var newPosition = children[i].position.clone();


            editor.execute(new SetPositionCommand(children[i], newPosition));
        }

        object.updateMatrixWorld( true );
        editor.signals.objectChanged.dispatch( object );

    }
}

function alignY() {

    var object = editor.selected;
    var children = object.children;

    if (children !== null) {

        for (var i in children) {

            children[i].position.x = children[0].position.x;
            children[i].position.z = children[0].position.z;
            var newPosition = children[i].position.clone();


            editor.execute(new SetPositionCommand(children[i], newPosition));
        }

        object.updateMatrixWorld( true );
        editor.signals.objectChanged.dispatch( object );

    }
}

// Covert the selected objects to a group

function confirmGroup( name ) {

    var object = editor.selected;
    var children = object.children;
    var group = new THREE.Group();
    var objectParent = object.parent;
    
    children.forEach(function (child) {

        var newChildren = group.children;
        newChildren.splice(children.length, 0, child);
        child.parent = group;
        this.editor.signals.sceneGraphChanged.dispatch();
    });

    children.splice(0, children.length);
    if (object.parent !== null) editor.execute(new RemoveObjectCommand(object));
    
    // Maintain the position if the objects have been moved in the multiple select mode
    var newPosition = object.position.clone();
    editor.execute(new SetPositionCommand(group, newPosition));
    group.updateMatrixWorld( true );
    editor.signals.objectChanged.dispatch( group );
    

    group.name = name;
    

    objectParent.add(group);

    editor.signals.objectAdded.dispatch(group);
    editor.signals.sceneGraphChanged.dispatch();

    editor.select(group);

    updatePanel();

}

function unGroup() {

    var object = editor.selected;
    var newParent = object.parent;
    var children = object.children;


    children.forEach(function (child) {

        var newChildren = newParent.children;
        newChildren.splice(newChildren.length, 0, child);
        child.parent = newParent;
        this.editor.signals.sceneGraphChanged.dispatch();
        
        // to maitain the children's global position 
        child.position.x = child.position.x + object.position.x;
        child.position.y = child.position.y + object.position.y;
        child.position.z = child.position.z + object.position.z;
        var newPosition = child.position.clone();

        editor.execute(new SetPositionCommand(child, newPosition));
        child.updateMatrixWorld( true );
        editor.signals.objectChanged.dispatch( child );

    });

    children.splice(0, children.length);
    if (object.parent !== null) editor.execute(new RemoveObjectCommand(object));
    
    updatePanel();
}
