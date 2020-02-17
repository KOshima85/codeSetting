// ## usage
// 1. change code line 7
// 2. `node merge.js`
//

var settigns = require('./settings/settings.json')
var base_settings = { "base_settings": 'fuga' } // please change `require( "path/to/default/setting.json" )`

var result = Object.assign(base_settings, settigns);


var fs = require("fs");

fs.writeFile('settings.json', JSON.stringify(result, null, "\t"), (err, data) => {
  if(err) console.log(err);
  else console.log('write end');
});