function getTempCallback(city,callback){
  callback(undefined,76);
  callback('city not found');
};

 getTempCallback('bangkoke',function(err,temp){
   if(err){
     console.log('error',err);
   }else{
     console.log('success',temp);
   }
});




function getTempPromises(city){
  return new Promise(function(resolve , reject){
    resolve(79);
    reject('city not found');
  });
}

getTempPromises('bangkok').then(function(temp){
  console.log('promise sucess',temp);
},function(error){
  console.log('promise failed',error);
});



function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if(typeof a === 'number'&&typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('one of the variables you send are not number');
    }
  });

}

addPromise(4,6).then(function(sum){
  console.log('the sum is',sum);
},function(error){
  console.log('error',error);
});
addPromise(4,"string").then(function(sum){
  console.log('the sum is',sum);
},function(error){
  console.log('error',error);
});
