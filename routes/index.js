var express = require('express');
var router = express.Router();
var Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/InJGUSbjUcfHGVFxTr91"));
console.log(web3.eth.blockNumber)



// if (typeof web3 !== 'undefined') {
//   web3 = new Web3(web3.currentProvider);
// 	console.log(web3)

//   console.log(1)
// } else {
// 	console.log(2)
//   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// }

/* GET index page. */
router.get('/', function(req, res, next) {

	console.log("index page");

  res.render('index', { title: 'Express' });
});


/* GET electricity market page. */
router.get('/e_market', function(req, res, next) {


  res.render('e_market', { title: 'Express' });
});

module.exports = router;
