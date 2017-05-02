'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('sth', function(){
        expect(app.reverseNumber(1234)).to.eql(4321);
    });

    it('if(isNaN(num))', function(){
        expect(app.reverseNumber("imNaN")).to.eql(false);
    });

});

describe('returnOnlyLetter', function ()
{
    it('sth', function(){
        expect(app.returnOnlyLetter("AF98af987")).to.eql("af");
            });
    it('you shall not pass!', function(){
        expect(app.returnOnlyLetter(997)).to.eql(false);
    });

});

describe('isEmail', function ()
{
    it('sth', function(){
        expect(app.isEmail("asdffa234.tk")).to.eql(false);
           });
    it('sth2', function(){
        expect(app.isEmail("asdffa@234.tk")).to.eql(true);
    });
});
