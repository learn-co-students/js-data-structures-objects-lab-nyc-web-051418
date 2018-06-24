// Write your solution in this file!

let driver = {
  firstKey: "firstValue"
}

function updateDriverWithKeyAndValue(driver, key, value) {
  console.log(key);
  let newDriver = Object.assign({}, driver, {[key]: value})
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
