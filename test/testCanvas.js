//import documentSetup from '../testHelper';

var assert = require('assert');
var jsdom = require('jsdom');
//var documentSetup = require('../testHelper.js');
var c = require('../js-objectdetect-master/static/canvas.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});