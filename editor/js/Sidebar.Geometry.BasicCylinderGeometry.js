Sidebar.Geometry.BasicCylinderGeometry = function ( editor, object ) {

	var signals = editor.signals;

	var container = new UI.Row();

	var geometry = object.geometry;
	var parameters = geometry.parameters;

	// radius

	var radiusRow = new UI.Row();
	var radius = new UI.Number( parameters.radius ).onChange( update );

	radiusRow.add( new UI.Text( 'Radius' ).setWidth( '90px' ) );
	radiusRow.add( radius );

	container.add( radiusRow );

	
	// height

	var heightRow = new UI.Row();
	var height = new UI.Number( parameters.height ).onChange( update );

	heightRow.add( new UI.Text( 'Height' ).setWidth( '90px' ) );
	heightRow.add( height );

	container.add( heightRow );

	// radialSegments

	var radialSegmentsRow = new UI.Row();
	var radialSegments = new UI.Integer( parameters.radialSegments ).setStep(400).setRange( 0, Infinity ).onChange( update );

	radialSegmentsRow.add( new UI.Text( 'Radial segments' ).setWidth( '90px' ) );
	radialSegmentsRow.add( radialSegments );

	container.add( radialSegmentsRow );

    
	// heightSegments

	var heightSegmentsRow = new UI.Row();
	var heightSegments = new UI.Integer( parameters.heightSegments ).setRange( 1, Infinity ).onChange( update );

	heightSegmentsRow.add( new UI.Text( 'Height segments' ).setWidth( '90px' ) );
	heightSegmentsRow.add( heightSegments );

	//container.add( heightSegmentsRow );
    

	// openEnded

	var openEndedRow = new UI.Row();
	var openEnded = new UI.Checkbox( parameters.openEnded ).onChange( update );

	openEndedRow.add( new UI.Text( 'Open ended' ).setWidth( '90px' ) );
	openEndedRow.add( openEnded );

	container.add( openEndedRow );

	//

	function update() {

		editor.execute( new SetGeometryCommand( object, new THREE[ geometry.type ](
			radius.getValue(),
			height.getValue(),
			radialSegments.getValue(),
			heightSegments.getValue(),
			openEnded.getValue()
		) ) );

	}

	return container;

};

Sidebar.Geometry.CylinderBufferGeometry = Sidebar.Geometry.CylinderGeometry;
