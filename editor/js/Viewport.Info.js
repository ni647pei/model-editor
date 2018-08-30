Viewport.Info = function (editor) {

    var signals = editor.signals;

    var container = new UI.Panel();
    container.setId('info');
    container.setPosition('absolute');
    container.setLeft('10px');
    container.setBottom('10px');
    container.setFontSize('12px');
    container.setColor('white');
    
    var nameText = new UI.Text('0').setMarginLeft('5px');
    var typeText = new UI.Text('0').setMarginLeft('5px');
    var parentText = new UI.Text('0').setMarginLeft('5px');
    var positionText = new UI.Text('0').setMarginLeft('5px');
    var xLengthText = new UI.Text('0').setMarginLeft('5px');
    var yLengthText = new UI.Text('0').setMarginLeft('5px');
    var zLengthText = new UI.Text('0').setMarginLeft('5px');

    container.add(new UI.Text('Name').setWidth('50px').setColor("#DDDDDD"), nameText, new UI.Break());
    container.add(new UI.Text('Type').setWidth('50px').setColor("#DDDDDD"), typeText, new UI.Break());
    container.add(new UI.Text('Parent').setWidth('50px').setColor("#DDDDDD"), parentText, new UI.Break());
    container.add(new UI.Text('Position').setWidth('50px').setColor("#DDDDDD"), positionText, new UI.Break());
    container.add(new UI.Text('X Length').setWidth('50px').setColor("#DDDDDD"), xLengthText, new UI.Break());
    container.add(new UI.Text('Y Length').setWidth('50px').setColor("#DDDDDD"), yLengthText, new UI.Break());
    container.add(new UI.Text('Z Length').setWidth('50px').setColor("#DDDDDD"), zLengthText, new UI.Break());


    signals.objectAdded.add(update);
    signals.objectRemoved.add(update);
    signals.geometryChanged.add(update);
    signals.objectSelected.add(update);
    signals.objectChanged.add(update);
    
    //

    function update() {

        var name = "-",
            objType = "-", geoType = "-", parent = "-",
            positionX = "-", positionY = "-", positionZ = "-",
            position = new THREE.Vector3(),
            xLength = "-", yLength = "-", zLength = "-";

        var selected = editor.selected;

        if (selected !== null) {
            
            name = selected.name;
            
            objType = selected.type;
            var geometry = selected.geometry;
            
            if(geometry !== undefined){
                
                geoType = geometry.type;
            }else{
                
                geoType = "NA";
            }
            
            if (selected.parent !== null){
                
                parent = selected.parent.name;
            }
            
            
            positionX = position.setFromMatrixPosition( selected.matrixWorld ).x.toFixed(2);
            positionY = position.setFromMatrixPosition( selected.matrixWorld ).y.toFixed(2);
            positionZ = position.setFromMatrixPosition( selected.matrixWorld ).z.toFixed(2);
            
            var box = new THREE.Box3();
            box.setFromObject(selected);
            xLength = box.getSize().x.toFixed(2);
            yLength = box.getSize().y.toFixed(2);
            zLength = box.getSize().z.toFixed(2);
        }

        nameText.setValue(name);
        typeText.setValue(objType + " ( " + geoType +" )");
        parentText.setValue(parent);
        positionText.setValue(" ( " + positionX + ", " + positionY + ", " + positionZ + " )");
        xLengthText.setValue(xLength);
        yLengthText.setValue(yLength);
        zLengthText.setValue(zLength);
    }

    return container;

};
