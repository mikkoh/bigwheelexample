var fs = require( 'fs' );

var bigwheel = require( 'bigwheel' ),
	bwmodel = require( 'bw-objmodel' ),
	bwhandlebars = require( 'bw-handlebars' ),
	bwwritedom = require( 'bw-writedom' ),
	bwboiler = require( 'bw-boilersection' );

var MODEL_DATA = JSON.parse( fs.readFileSync( './data/model.json', 'utf8' ) ),
	TEMPLATE_BASIC = fs.readFileSync( './data/basicPage.hbs', 'utf8' ),
	model = bwmodel( MODEL_DATA ),
	handlebars = bwhandlebars( TEMPLATE_BASIC ),
	writebody = bwwritedom( 'body' ),
	section = bwboiler();

var framework = bigwheel( {

	'/': model( 'landing' )( handlebars )( writebody )( section )(),
	'/about': model( 'about' )( handlebars )( writebody )( section )(),
	'/contact': model( 'contact' )( handlebars )( writebody )( section )()
});

framework.init();