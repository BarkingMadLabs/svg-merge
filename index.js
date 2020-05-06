var svgstore = require('svgstore');
var fs = require('fs');

var sprites = svgstore()
    .add('one', fs.readFileSync('./samples/adobe.svg', 'utf8'))
    .add('two', fs.readFileSync('./samples/android.svg', 'utf8'));

fs.writeFileSync('./sprites.svg', sprites);