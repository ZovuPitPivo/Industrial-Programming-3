let expoNumber = (number) => `${number[0]},${number.slice(1, number.length)} + e^${number.slice(1, number.lenght).length -1}`;

process.stdin.on('data', data => {console.log(expoNumber(data.toString()));})
