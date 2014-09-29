var fs = require( 'fs' );

var bigwheel = require( 'bigwheel' ),
	bwmodel = require( 'bw-objmodel' ),
	bwhandlebars = require( 'bw-handlebars' ),
	handlebars = require( 'handlebars' ),
	bwwritedom = require( 'bw-writedom' ),
	bwboiler = require( 'bw-boilersection' );

var MODEL_DATA = JSON.parse( fs.readFileSync( './data/model.json', 'utf8' ) ),
	TEMPLATE_BASIC = fs.readFileSync( './data/basicPage.hbs', 'utf8' ),
	TEMPLATE_MENU = fs.readFileSync( './data/menu.hbs', 'utf8' ),
	model = bwmodel( MODEL_DATA ),
	template = bwhandlebars( TEMPLATE_BASIC ),
	writebody = bwwritedom( 'body' ),
	section = bwboiler();

handlebars.registerPartial( 'menu', TEMPLATE_MENU );

var framework = bigwheel( {

	'/': model( 'landing' )( template )( writebody )( section )(),
	'/about': model( 'about' )( template )( writebody )( section )(),
	'/contact': model( 'contact' )( template )( writebody )( section )()
});


framework.init();