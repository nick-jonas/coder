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
    tmplvars['static_url'] = exports.settings.staticurl;
    tmplvars['app_name'] = exports.settings.appname;
    tmplvars['app_url'] = exports.settings.appurl;
    tmplvars['device_name'] = exports.settings.device_name;
    
    // get weather
    var coord = ['40.7127', '-74.0059'];
    var Forecast = require('forecast.io');
    var moment = require('moment');
    var fcast = new Forecast({
        APIKey: '8bfc0a79dcda808034c294cf2c89e879'
    });
    fcast.get(coord[0], coord[1], function (err, fRes, fData) {
        if (err) throw err;
        var hourly = fData.hourly.data;
        tmplvars['weather'] = [];
        for(var i = 0; i < 9; i++){
            var timeWeather = {};
            timeWeather.index = i;
            timeWeather.time = hourly[i].time;
            timeWeather.hour = moment(new Date(hourly[i].time * 1000)).format('ha');
            timeWeather.summary = hourly[i].summary;
            timeWeather.icon = hourly[i].icon;
            timeWeather.temp = Math.round(hourly[i].temperature);
            tmplvars['weather'].push(timeWeather);    
        }
        res.render( exports.settings.viewpath + '/index', tmplvars );
    });

    
};

exports.on_destroy = function() {
};