var assert = require("assert");
var Dice = require("../src/models/dice.js");

describe("Dice", function(){
	describe("roll()", function(){
		it("should return a number greater than 0 and less than 7", function(){
				var dice = new Dice(6);
				assert(dice.roll() < 7);
				assert(dice.roll() > 0);
		});
	});
});