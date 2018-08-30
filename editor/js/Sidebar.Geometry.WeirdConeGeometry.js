
Sidebar.Geometry.WeirdConeGeometry = function ( editor, object ) {
    
    var signals = editor.signals;

	var container = new UI.Row();

    var geometry = object.geometry;
    var parameters = geometry.parameters;
    
    // Buttom Width

    var bottomWidthRow = new UI.Row();
    var bottomWidth = new UI.Number( parameters.w ).onChange( update );

    bottomWidthRow.add( new UI.Text( 'Bottom Width' ).setWidth( '90px' ) );
    bottomWidthRow.add( bottomWidth );

    container.add( bottomWidthRow );
    
    // Buttom Depth

    var bottomDepthRow = new UI.Row();
    var bottomDepth = new UI.Number( parameters.d ).onChange( update );

    bottomDepthRow.add( new UI.Text( 'Bottom Depth' ).setWidth( '90px' ) );
    bottomDepthRow.add( bottomDepth );

    container.add( bottomDepthRow );

	
    // Height

    var heightRow = new UI.Row();
    var height = new UI.Number( parameters.h ).onChange( update );

    heightRow.add( new UI.Text( 'Height' ).setWidth( '90px' ) );
    heightRow.add( height );

    container.add( heightRow );

    
    // Top Radius

    var topRadiusRow = new UI.Row();
    var topRadius = new UI.Number( parameters.r ).onChange( update );

    topRadiusRow.add( new UI.Text( 'Top Radius' ).setWidth( '90px' ) );
    topRadiusRow.add( topRadius );

    container.add( topRadiusRow );
    
    
    // radialSegments

    var radialSegmentsRow = new UI.Row();
    var radialSegments = new UI.Integer( parameters.seg ).setStep(400).setRange( 0, Infinity ).onChange( update );

    radialSegmentsRow.add( new UI.Text( 'Radial segments' ).setWidth( '90px' ) );
    radialSegmentsRow.add( radialSegments );

    container.add( radialSegmentsRow );

    

	function update() {
        
        object.geometry.dispose();

        editor.execute( new SetGeometryCommand( object, new THREE[geometry.type](
            bottomWidth.getValue(),
            bottomDepth.getValue(),
            height.getValue(),
            topRadius.getValue(),
            radialSegments.getValue()
        ) ) );
        
        object.geometry.computeBoundingBox();
        
        signals.geometryChanged.dispatch( object );


	}

	return container;

};
