/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Add = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'ADD' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	//

	var meshCount = 0;
	var lightCount = 0;
	var cameraCount = 0;

	editor.signals.editorCleared.add( function () {

		meshCount = 0;
		lightCount = 0;
		cameraCount = 0;

	} );

    
    // Group -menu
    var option = new UI.Row();
    option.setClass( 'option' );
    option.setTextContent( 'Group' );
    option.onClick( function() {

        var mesh = new THREE.Group();
        //mesh.rotateX(Math.PI/2);
        mesh.name = 'Group ' + ( ++ meshCount );

        editor.execute( new AddObjectCommand( mesh ) );

    } );
    options.add( option );

    options.add( new UI.HorizontalRule() );
    
    
    // Add shape -menu
    
    var shape = new UI.Row();
    shape.setClass('option');
    shape.setTextContent('Shape');
    shape.onClick( function(){
        
        document.getElementById("leftmenu").style.width = "230px";
        document.getElementById("addGroup").style.width = "182px";
        var shapes = document.getElementsByClassName('shape');
        for (var i = 0; i < shapes.length; ++i) {
            var item = shapes[i]; 
            item.style.transition = "0.4s";
            item.style.width = "80px";                    
        }

        
    });
    options.add(shape);
    
    
    // Add model
    
    var model = new UI.Row();
    model.setClass('option');
    model.setTextContent('Model (Mockup)');
    model.onClick( function(){

        document.getElementById("mockup2").style.display = 'block'; 
        
        
    });
    options.add(model);
    
    options.add( new UI.HorizontalRule() );
    
    
    // Group -image

    document.getElementById("addGroup").onclick = function(){
        
        var mesh = new THREE.Group();
        //mesh.rotateX(Math.PI/2);
        mesh.name = 'Group ' + ( ++ meshCount );

        editor.execute( new AddObjectCommand( mesh ) );

    };
    
   
	// Plane

    document.getElementById("plane").onclick = function(){
        
        var geometry = new THREE.PlaneGeometry( 5000, 5000, 1, 1 );
        var material = new THREE.MeshStandardMaterial();
        var mesh = new THREE.Mesh( geometry, material );
        mesh.name = 'Plane ' + ( ++ meshCount );

        editor.execute( new AddObjectCommand( mesh ) );

    };
    
	
    // Box 
    document.getElementById("box").onclick = function(){
        var geometry = new THREE.BoxGeometry( 2000, 1000, 3000, 1, 1, 1 );
        var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
        mesh.rotateX(Math.PI/2);
        mesh.name = 'Box ' + ( ++ meshCount );

        editor.execute( new AddObjectCommand( mesh ) );

    };
    /*
	// Circle

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Circle' );
	option.onClick( function () {

		var geometry = new THREE.CircleBufferGeometry( 1, 24, 0, Math.PI * 2 );
		var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Circle ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );
    
    */

	
    // Cylinder
    document.getElementById("cylinder").onclick = function(){
        var geometry = new THREE.BasicCylinderGeometry( 2000, 5000, 24, 1, false );
        var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
        mesh.name = 'Cylinder ' + ( ++ meshCount );
        mesh.rotateX(Math.PI/2);

        editor.execute( new AddObjectCommand( mesh ) );

    };
    
    // Round Cone 
    document.getElementById("cone_c").onclick = function(){
        var geometry = new THREE.CylinderGeometry( 2000, 3000, 5000, 24, 1, false, 0, Math.PI * 2 );
        var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
        mesh.rotateX(Math.PI/2);
        mesh.name = 'Round cone ' + ( ++ meshCount );

        editor.execute( new AddObjectCommand( mesh ) );

    };
    
    // Square Cone 
    document.getElementById("cone_s").onclick = function(){
        var w1 = 3000;
        var d1 = 2000;
        var w2 = 1000;
        var d2 = 500;
        var h = 2000;

        var geometry = new THREE.SquareConeGeometry( w1, d1, w2, d2, h);
        var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial({ side : THREE.DoubleSide }) );
        mesh.rotateX(Math.PI/2);

        mesh.name = 'Square Cone ' + ( ++ meshCount );


        editor.execute( new AddObjectCommand( mesh ) );

    };

    

    
    // Sphere 
    
    document.getElementById("sphere").onclick = function(){
        var geometry = new THREE.SphereGeometry( 2000, 24, 24, 0, Math.PI * 2, 0, Math.PI );
        var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
        mesh.rotateX(Math.PI/2);
        mesh.name = 'Sphere ' + ( ++ meshCount );

        editor.execute( new AddObjectCommand( mesh ) );

    };
    

    // Cap 
    
    document.getElementById("cap").onclick = function(){
        
        var bottomRadius = 2000;
        var height = 2000;
        var segments = 24;
        
        var geometry = new THREE.CapGeometry( bottomRadius, height, segments);
        var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
        mesh.rotateX(Math.PI/2);
        
        mesh.name = 'Cap ' + ( ++ meshCount );

        editor.execute( new AddObjectCommand( mesh ) );
        
        
    };
    
    
    // Weird cone

    document.getElementById("cone_w").onclick = function(){
        
        var bottomWidth = 5000;
        var bottomDepth = 4500;
        var height = 600;
        var topRadius = 2000;
        var segments = 24;

        var geometry = new THREE.WeirdConeGeometry( bottomWidth, bottomDepth, height, topRadius, segments);
        var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial({ side : THREE.DoubleSide }) );
        mesh.rotateX(Math.PI/2);
        mesh.name = 'Weird Cone ' + ( ++ meshCount );

        editor.execute( new AddObjectCommand( mesh ) );
     
    };
    
    // Tilt cone 

    document.getElementById("cone_t").onclick = function(){

        var bottomRadius = 2000;
        var topRadius = 1000;
        var height = 5000;
        var tiltDistance = 1000;
        var segments = 20;
        
        var geometry = new THREE.TiltConeGeometry( bottomRadius, topRadius, height, tiltDistance, segments);
        var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial({ side : THREE.DoubleSide }) );
        mesh.rotateX(Math.PI/2);
        
        mesh.name = 'Tilt Cone ' + ( ++ meshCount );

        editor.execute( new AddObjectCommand( mesh ) );

    };

/*
	// Icosahedron

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Icosahedron' );
	option.onClick( function () {

		var geometry = new THREE.IcosahedronGeometry( 1, 0 );
		var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Icosahedron ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );
    
    */

	// Torus
    
    document.getElementById("torus").onclick = function(){

        var geometry = new THREE.TorusGeometry( 2000, 500, 12, 24, Math.PI * 2 );
        var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
        mesh.name = 'Torus ' + ( ++ meshCount );

        editor.execute( new AddObjectCommand( mesh ) );


    };



    /*
	// TorusKnot

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'TorusKnot' );
	option.onClick( function () {

		var geometry = new THREE.TorusKnotBufferGeometry( 1, 0.4, 64, 8, 2, 3 );
		var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'TorusKnot ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );

	
	// Teapot

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Teapot' );
	option.onClick( function () {

		var size = 50;
		var segments = 10;
		var bottom = true;
		var lid = true;
		var body = true;
		var fitLid = false;
		var blinnScale = true;

		var material = new THREE.MeshStandardMaterial();

		var geometry = new THREE.TeapotBufferGeometry( size, segments, bottom, lid, body, fitLid, blinnScale );
		var mesh = new THREE.Mesh( geometry, material );
		mesh.name = 'Teapot ' + ( ++ meshCount );

		editor.addObject( mesh );
		editor.select( mesh );

	} );
	options.add( option );
	

	// Lathe

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Lathe' );
	option.onClick( function() {

		var points = [
			new THREE.Vector2( 0, 0 ),
			new THREE.Vector2( 0.4, 0 ),
			new THREE.Vector2( 0.35, 0.05 ),
			new THREE.Vector2( 0.1, 0.075 ),
			new THREE.Vector2( 0.08, 0.1 ),
			new THREE.Vector2( 0.08, 0.4 ),
			new THREE.Vector2( 0.1, 0.42 ),
			new THREE.Vector2( 0.14, 0.48 ),
			new THREE.Vector2( 0.2, 0.5 ),
			new THREE.Vector2( 0.25, 0.54 ),
			new THREE.Vector2( 0.3, 1.2 )
		];

		var geometry = new THREE.LatheBufferGeometry( points, 12, 0, Math.PI * 2 );
		var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial( { side: THREE.DoubleSide } ) );
		mesh.name = 'Lathe ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( mesh ) );

	} );
	options.add( option );

	// Sprite

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Sprite' );
	option.onClick( function () {

		var sprite = new THREE.Sprite( new THREE.SpriteMaterial() );
		sprite.name = 'Sprite ' + ( ++ meshCount );

		editor.execute( new AddObjectCommand( sprite ) );

	} );
	options.add( option );
*/
	//


	// PointLight

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'PointLight' );
	option.onClick( function () {

		var color = 0xffffff;
		var intensity = 1;
		var distance = 0;

		var light = new THREE.PointLight( color, intensity, distance );
		light.name = 'PointLight ' + ( ++ lightCount );

		editor.execute( new AddObjectCommand( light ) );

	} );
	options.add( option );

	// SpotLight

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'SpotLight' );
	option.onClick( function () {

		var color = 0xffffff;
		var intensity = 1;
		var distance = 0;
		var angle = Math.PI * 0.1;
		var penumbra = 0;

		var light = new THREE.SpotLight( color, intensity, distance, angle, penumbra );
		light.name = 'SpotLight ' + ( ++ lightCount );
		light.target.name = 'SpotLight ' + ( lightCount ) + ' Target';

		light.position.set( 5, 10, 7.5 );

		editor.execute( new AddObjectCommand( light ) );

	} );
	options.add( option );

	// DirectionalLight

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'DirectionalLight' );
	option.onClick( function () {

		var color = 0xffffff;
		var intensity = 1;

		var light = new THREE.DirectionalLight( color, intensity );
		light.name = 'DirectionalLight ' + ( ++ lightCount );
		light.target.name = 'DirectionalLight ' + ( lightCount ) + ' Target';

		light.position.set( 5000, 10000, 10000 );

		editor.execute( new AddObjectCommand( light ) );

	} );
	options.add( option );

    /*
	// HemisphereLight

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'HemisphereLight' );
	option.onClick( function () {

		var skyColor = 0x00aaff;
		var groundColor = 0xffaa00;
		var intensity = 1;

		var light = new THREE.HemisphereLight( skyColor, groundColor, intensity );
		light.name = 'HemisphereLight ' + ( ++ lightCount );

		light.position.set( 0, 10, 0 );

		editor.execute( new AddObjectCommand( light ) );

	} );
	options.add( option );

	// AmbientLight

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'AmbientLight' );
	option.onClick( function() {

		var color = 0x222222;

		var light = new THREE.AmbientLight( color );
		light.name = 'AmbientLight ' + ( ++ lightCount );

		editor.execute( new AddObjectCommand( light ) );

	} );
	options.add( option );

	*/

    options.add( new UI.HorizontalRule() );
    
	// PerspectiveCamera

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'PerspectiveCamera' );
	option.onClick( function() {

		var camera = new THREE.PerspectiveCamera( 50, 1, 1, 10000 );
		camera.name = 'PerspectiveCamera ' + ( ++ cameraCount );

		editor.execute( new AddObjectCommand( camera ) );

	} );
	options.add( option );
    

	return container;

};
