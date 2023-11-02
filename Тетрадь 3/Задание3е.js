class Random {
  static nextDouble(low, high) {
    return Math.random() * (high - low) + low;
  }

  static nextInt(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }

  static nextElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }
}

const low = 1;
const high = 10;
const array = [1, 2, 3, 4, 5];

const randomDouble = Random.nextDouble(low, high);

const randomInt = Random.nextInt(low, high);

const randomElement = Random.nextElement(array);

console.log(`Random Double: ${randomDouble}`);
console.log(`Random Int: ${randomInt}`);
console.log(`Random Element: ${randomElement}`);