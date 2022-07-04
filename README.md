Copy the genesis.json to your home folder, change the paths in observe.sh according to your local paths, copy observe.sh to your home folder.
Then run "bash observe.sh" to execute the SRBB VM

sender.js is the web3js file to send transactions. txs.json is the pre-signed transaction file that sender.js reads and sends out transactions from.
Adjust the loop size to increase or decrease the transactions you send.

Steps to setup sending transactions:

1) Install node using https://github.com/nvm-sh/nvm
2) npm install web3 
3) node sender.js
