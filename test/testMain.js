//import documentSetup from '../testHelper';
var assert = require('assert');
//var documentSetup = require(testHelper.js);

//TODO

/*
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const options = {
	contentType: 'text/html',
};
const dom = JSDOM.fromFile('../js-objectdetect-master/static/fullscreen_demo_integration_3', options).then(dom => {
	console.log(dom.serialize());
});
var document = dom;
var window = document.defaultView;
var Smoother = require('../js-objectdetect-master/static/js/smoother.js');
var main = require('../js-objectdetect-master/static/main.js');
jsdom();
*/
//var c = require('../js-objectdetect-master/static/canvas.js');
//var v = require('../js-objectdetect-master/static/video.js');

describe('Array', function() {
  describe('#indexOf()', function() {
	//jsdom()
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});