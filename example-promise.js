function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('London', function(err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

// Promises, only called once! Either resolve or reject

function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(79);
            reject("City not found");
        }, 1000);
    });
}

getTempPromise('London').then(function(temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
});

// Test

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b == 'number') {
      resolve(a+b);
    } else {
      reject('Undefined values');
    }
  });
}

addPromise(2, 5).then(function(res){
  console.log('Sum', res);
}, function(err) {
  console.log('Promise error', err);
});

addPromise('Adam', 5).then(function(res){
  console.log('Sum:', res);
}, function(err) {
  console.log('Promise error:', err);
});
