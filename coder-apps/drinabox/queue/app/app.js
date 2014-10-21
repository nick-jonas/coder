var path = require('path');
var config = require('../../config');

exports.settings={};
//These are dynamically updated by the runtime
//settings.appname - the app id (folder) where your app is installed
//settings.viewpath - prefix to where your view html files are located
//settings.staticurl - base url path to static assets /static/apps/appname
//settings.appurl - base url path to this app /app/appname
//settings.device_name - name given to this coder by the user, Ie."Billy's Coder"
//settings.coder_owner - name of the user, Ie. "Suzie Q."
//settings.coder_color - hex css color given to this coder.

exports.get_routes = [
    { path:'/', handler:'index_handler' },
];

exports.post_routes = [
];


exports.index_handler = function( req, res ) {
    var tmplvars = {};

    var appdir = path.join(__dirname, '../../apps/');
    var staticdir = '/static/apps/';
    var viewdir = 'apps/';

    var appqueue = ['weather'];
    var appname = appqueue[0];
    
    var userapp = loadApp( appdir + appname + "/app" );
    userapp.settings.appname = appname;
    userapp.settings.viewpath="apps/" + appname;
    userapp.settings.appurl= "/app/" + appname;
    userapp.settings.staticurl = staticdir + appname;
    userapp.settings.device_name = exports.settings.device_name;
    userapp.settings.body_classes = 'queue_mode';

    // get index route for next app
    var route = null;
    for(var i in userapp.get_routes){
    	if(userapp.get_routes[i].path === '/'){
    		route = userapp.get_routes[i];
    	}
    }
    if(!route){
    	res.status( 404 );
        res.render('404', {
            title: 'error'
        });
        return;
    }
    userapp[route['handler']]( req, res );
};

exports.on_destroy = function() {
};

var loadApp = function( loadpath ) {
    var userapp = null;
    if ( config.cacheApps ) {
        userapp = require(loadpath);
    } else {

        var cached = require.cache[loadpath + '.js'];
        if ( cached ) {
            userapp = require(loadpath);
            if ( userapp.on_destroy ) {
                userapp.on_destroy();
            }
            delete require.cache[loadpath + ".js"];
        }
        userapp = require(loadpath);
    }
    return userapp;
};