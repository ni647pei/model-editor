
Sidebar.Geometry.SquareConeGeometry = function ( editor, object ) {
    
    var signals = editor.signals;

	var container = new UI.Row();

    var geometry = object.geometry;
    var parameters = geometry.parameters;
    
    // Buttom Width

    var bottomWidthRow = new UI.Row();
    var bottomWidth = new UI.Number( parameters.w1 ).onChange( update );

    bottomWidthRow.add( new UI.Text( 'Bottom Width' ).setWidth( '90px' ) );
    bottomWidthRow.add( bottomWidth );

    container.add( bottomWidthRow );
    
    
    // Buttom Depth

    var bottomDepthRow = new UI.Row();
    var bottomDepth = new UI.Number( parameters.d1 ).onChange( update );

    bottomDepthRow.add( new UI.Text( 'Bottom Depth' ).setWidth( '90px' ) );
    bottomDepthRow.add( bottomDepth );

    container.add( bottomDepthRow );
    
    
    // Top Width

    var topWidthRow = new UI.Row();
    var topWidth = new UI.Number( parameters.w2 ).onChange( update );

    topWidthRow.add( new UI.Text( 'Top Width' ).setWidth( '90px' ) );
    topWidthRow.add( topWidth );

    container.add( topWidthRow );
    

    // Top Depth

    var topDepthRow = new UI.Row();
    var topDepth = new UI.Number( parameters.d2 ).onChange( update );

    topDepthRow.add( new UI.Text( 'Top Depth' ).setWidth( '90px' ) );
    topDepthRow.add( topDepth );

    container.add( topDepthRow );

	
    // Height

    var heightRow = new UI.Row();
    var height = new UI.Number( parameters.h ).onChange( update );

    heightRow.add( new UI.Text( 'Height' ).setWidth( '90px' ) );
    heightRow.add( height );

    container.add( heightRow );

    
    
    

	function update() {
        
        object.geometry.dispose();

        editor.execute( new SetGeometryCommand( object, new THREE[geometry.type](
            bottomWidth.getValue(),
            bottomDepth.getValue(),
            topWidth.getValue(),
            topDepth.getValue(),
            height.getValue()
        ) ) );
        
        object.geometry.computeBoundingBox();
        
        signals.geometryChanged.dispatch( object );


	}

	return container;

};
