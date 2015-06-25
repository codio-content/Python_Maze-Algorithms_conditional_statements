
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();


// Keyboard handler
router.get('/js-1', function(req, res) {
  res.render('js-1');
});

// Keyboard handler complete all keys
router.get('/ch-1', function(req, res) {
  res.render('ch-1');
});

// Keyboard handler fix the error
router.get('/ch-2', function(req, res) {
  res.render('ch-2');
});

// Keyboard handler fix the error 2
router.get('/ch-3', function(req, res) {
  res.render('ch-3');
});

// Why == again
router.get('/js-2', function(req, res) {
  res.render('js-2');
});

// Else
router.get('/js-3', function(req, res) {
  res.render('js-3');
});

// Else If
router.get('/js-4', function(req, res) {
  res.render('js-4');
});

// Else If completion challenge
router.get('/ch-4', function(req, res) {
  res.render('ch-4');
});

// If in collision
router.get('/ch-5', function(req, res) {
  res.render('ch-5');
});

// Using type only to show message
router.get('/ch-6', function(req, res) {
  res.render('ch-6');
});

// Simple energy test 
router.get('/ch-7', function(req, res) {
  res.render('ch-7');
});

// More < > else
router.get('/ch-8', function(req, res) {
  res.render('ch-8');
});


module.exports = router;
