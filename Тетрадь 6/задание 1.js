// Задание первое
function invokeAfterDelay(func, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = func();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}

const getRandomNumber = () =>{
  return Math.random();
}

const delay = 2000 //2 sec
const promise = invokeAfterDelay(getRandomNumber, delay);
promise.then((result) => {
  console.log("Random number:", result);
}).catch((error) => {
  console.error("Error:", error);
});