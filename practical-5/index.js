function greet(name, callback) {
  setTimeout(() => {
    console.log(`Hello ${name}`);
    callback();
  }, 1000);
}

greet('Alice', () => {
  console.log('Done');
});
