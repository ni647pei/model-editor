Sidebar.Geometry.TiltConeGeometry = function ( editor, object ) {
    
    var signals = editor.signals;

	var container = new UI.Row();

    var geometry = object.geometry;
    var parameters = geometry.parameters;
    
    // Bottom Radius

    var BottomRadiusRow = new UI.Row();
    var BottomRadius = new UI.Number( parameters.r1 ).onChange( update );

    BottomRadiusRow.add( new UI.Text( 'Bottom Radius' ).setWidth( '90px' ) );
    BottomRadiusRow.add( BottomRadius );

    container.add( BottomRadiusRow );

    
    // Top Radius

    var topRadiusRow = new UI.Row();
    var topRadius = new UI.Number( parameters.r2 ).onChange( update );

    topRadiusRow.add( new UI.Text( 'Top Radius' ).setWidth( '90px' ) );
    topRadiusRow.add( topRadius );

    container.add( topRadiusRow );
    
    // Height

    var heightRow = new UI.Row();
    var height = new UI.Number( parameters.h ).onChange( update );

    heightRow.add( new UI.Text( 'Height' ).setWidth( '90px' ) );
    heightRow.add( height );

    container.add( heightRow );

    // Tilt distance

    var TiltDistanceRow = new UI.Row();
    var TiltDistance = new UI.Number( parameters.t ).onChange( update );

    TiltDistanceRow.add( new UI.Text( 'Tilt Distance' ).setWidth( '90px' ) );
    TiltDistanceRow.add( TiltDistance );

    container.add( TiltDistanceRow );
    
    
    // radialSegments

    var radialSegmentsRow = new UI.Row();
    var radialSegments = new UI.Integer( parameters.seg ).setRange( 0, Infinity ).onChange( update );

    radialSegmentsRow.add( new UI.Text( 'Radial segments' ).setWidth( '90px' ) );
    radialSegmentsRow.add( radialSegments );

    container.add( radialSegmentsRow );
    

	function update() {
        
        object.geometry.dispose();

        editor.execute( new SetGeometryCommand( object, new THREE[geometry.type](
            BottomRadius.getValue(),
            topRadius.getValue(),
            height.getValue(),
            TiltDistance.getValue(),
            radialSegments.getValue()
        ) ) );
        
        object.geometry.computeBoundingBox();
        
        signals.geometryChanged.dispatch( object );


	}

	return container;

};
