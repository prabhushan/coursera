#!/usr/bin/env node
 var primeArr = new Array();
var fs = require('fs');

var fmt = function(arr) {
return primeArr.join(",");
};

var isPrime = function(n){

var i=2;
for (i=2;i<n;i++)
{

        if((n%i)== 0)
        {
          return false;
        }
}
return true;
}

var firstnPrime = function(n){
var iStart = 2;
while(primeArr.length <= n)
{
 if(isPrime(iStart) == true)
{
//console.log('Pushing '+i);
 primeArr.push(iStart);
}
iStart = iStart+1;

}

}
var n = 100;
// console.log('Printing Prime for : '+n+'numbers');
firstnPrime(n);

//console.log(primeArr.toString()primeArr.toString());
fs.writeFileSync('primeoutput.txt',fmt(primeArr));

