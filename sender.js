const w3 = require("web3")
const fs = require("fs")
//const hexutil = require("hex-utils")
const rlp = require("rlp")
//const web3 = new w3(new w3.providers.HttpProvider("http://127.0.0.1:8545"))
const web3 = new w3(new w3.providers.WebsocketProvider("ws://127.0.0.1:8546"))

web3.eth.getBalance("0x97f22368eea8ca06031bc57fcd3d9169e687584e").then(console.log)
//web3.eth.getBalance("0x5c33e160f3693b3e2cef2a3000bf1822b49001ec").then(console.log)
// load the transaction file
txs = JSON.parse(fs.readFileSync('txs.json'))
// send a transaction one by one
start=Date.now()
console.log("START: "+start);
async function send(){
for ( let i = 0; i < 100; i++ ) {
    web3.eth.sendSignedTransaction("0x" + txs[i]["serialized"])
        .on('receipt', function(receipt){
		console.log("END: "+Date.now());
		console.log(receipt);
		web3.eth.getBalance("0x97f22368eea8ca06031bc57fcd3d9169e687584e").then(console.log)
	})
//console.log("number of sent transactions", i)
//add a timeout every 1500 txs here
//if(i%1500 ==0){
//await sleep(1000)
//}

}
end=Date.now()
duration = end -start
nduration = duration/1000
sendingrt=100/nduration
console.log("The sending rate is:"+sendingrt)
}
send();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
