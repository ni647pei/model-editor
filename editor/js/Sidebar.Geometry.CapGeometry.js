
Sidebar.Geometry.CapGeometry = function ( editor, object ) {
    
    var signals = editor.signals;

	var container = new UI.Row();

    var geometry = object.geometry;
    var parameters = geometry.parameters;
    
    // Buttom Radius

    var buttomRadiusRow = new UI.Row();
    var buttomRadius = new UI.Number( parameters.buttomRadius ).onChange( update );

    buttomRadiusRow.add( new UI.Text( 'Radius bottom' ).setWidth( '90px' ) );
    buttomRadiusRow.add( buttomRadius );

    container.add( buttomRadiusRow );

	
    // Height

    var heightRow = new UI.Row();
    var height = new UI.Number( parameters.height ).onChange( update );

    heightRow.add( new UI.Text( 'Height' ).setWidth( '90px' ) );
    heightRow.add( height );

    container.add( heightRow );

    
    // segments

    var segmentsRow = new UI.Row();
    var segments = new UI.Integer( parameters.segments ).setRange( 1, Infinity ).onChange( update );

    segmentsRow.add( new UI.Text( 'Segments' ).setWidth( '90px' ) );
    segmentsRow.add( segments );

    container.add( segmentsRow );

    var r = (Math.pow(buttomRadius,2)+ Math.pow(height,2)) / (2* height);

	function update() {
        
        object.geometry.dispose();

        editor.execute( new SetGeometryCommand( object, new THREE[geometry.type](
            buttomRadius.getValue(),
            height.getValue(),
            segments.getValue()
        ) ) );
        
        object.geometry.computeBoundingSphere();
        
        //object.geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, height - r, 0 ) );
        
        signals.geometryChanged.dispatch( object );


	}

	return container;

};
