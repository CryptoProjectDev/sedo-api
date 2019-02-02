
var EthHelper = require ('./lib/ethhelper')
var ExpressServer = require ('./lib/express-server')


//var mongoInterface = require('./lib/mongo-interface')

function init()
{
  console.log('Booting SEDO API bot.')
  var web3 = new EthHelper();

  var expressServer = new ExpressServer();

  //every 60 seconds, update the data using Infura


  setInterval(function(){

    EthHelper.connectToContract(web3 ,async function(data){
      expressServer.updateTokenData(data)
    }  )

   }, 60*1000);

   EthHelper.connectToContract(web3 ,async function(data){
     expressServer.updateTokenData(data)
   }  )

  //start express



}



init();
