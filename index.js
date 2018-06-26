// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, val){
  return Object.assign({}, obj, {[key]: val});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val){
  obj[key] = val;

  return obj;
}

function deleteFromDriverByKey(obj, key){
  const newDriver = Object.assign({}, obj);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey (obj, key) {
  delete obj[key];
  return obj;
}
