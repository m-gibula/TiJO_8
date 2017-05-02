'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('sth', function(){
        expect(app.reverseNumber(1234)).to.eql(4321);
    });
});

describe('returnOnlyLetter', function ()
{
    it('sth', function(){
        expect(app.returnOnlyLetter("AF98af987")).to.eql("af");
            });
});

describe('isEmail', function ()
{
    it('sth', function(){
        expect(app.isEmail("asdffa234.tk")).to.eql(false);
           });
});
