// Dependencies
var express = require('express');
var path = require('path');


var app = express();

module.exports = function(app){

	//PAGES

	app.get('/ana', function(req, res){
		res.render('ana');
	})
	app.get('/bob', function(req, res){
		res.render('bob');
	})
	app.get('/cat', function(req, res){
		res.render('cat');
	})
	app.get('/end/ana', function(req, res){
		res.render('ana', {layout:'end'});
	});
	app.get('/end/bob', function(req, res){
		res.render('bob', {layout:'end'});
	});
		app.get('/end/cat', function(req, res){
		res.render('cat', {layout:'end'});
	});



	app.get('/', function(req, res){
		res.render('ana');
	})
	

}