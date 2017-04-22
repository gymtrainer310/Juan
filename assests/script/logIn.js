/**
 * Created by juancarlosnavarrete on 4/21/17.
 */

$( document ).click(function() {

    $( ".toggle" ).toggle( "highlight" );

    $( "li" ).hover(
        function() {
            $( this ).append( $( "<span> ***</span>" ) );
        }, function() {
            $( this ).find( "span:last" ).remove();
        }
    );
});

