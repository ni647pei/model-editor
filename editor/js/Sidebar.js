/**
 * @author mrdoob / http://mrdoob.com/
 */

var Sidebar = function ( editor ) {

    var container = new UI.Panel();
    container.setId( 'sidebar' );

    //

    var sceneTab = new UI.Text( 'SCENE' ).onClick( onClick );
    var projectTab = new UI.Text( 'PROJECT' ).onClick( onClick );
    var historyTab = new UI.Text( 'HISTORY' ).onClick( onClick );

    var tabs = new UI.Div();
    tabs.setId( 'tabs' );
    tabs.add( sceneTab, historyTab, projectTab  );
    container.add( tabs );

    function onClick( event ) {

        select( event.target.textContent );

    }

    //

    var scene = new UI.Span().add(
        new Sidebar.Scene( editor ),
        new Sidebar.Properties( editor ),
        //new Sidebar.Animation( editor ),
        //new Sidebar.Script( editor )
    );
    container.add( scene );

    var project = new UI.Span().add(
        new Sidebar.Project( editor )
    );
    container.add( project );

    var history = new UI.Span().add(
        //new Sidebar.Settings( editor ),
        new Sidebar.History( editor )
    );
    container.add( history );

    //

    function select( section ) {

        sceneTab.setClass( '' );
        projectTab.setClass( '' );
        historyTab.setClass( '' );

        scene.setDisplay( 'none' );
        project.setDisplay( 'none' );
        history.setDisplay( 'none' );

        switch ( section ) {
            case 'SCENE':
                sceneTab.setClass( 'selected' );
                scene.setDisplay( '' );
                break;
            case 'PROJECT':
                projectTab.setClass( 'selected' );
                project.setDisplay( '' );
                break;
            case 'HISTORY':
                historyTab.setClass( 'selected' );
                history.setDisplay( '' );
                break;
                         }

    }

    select( 'SCENE' );

    return container;

};