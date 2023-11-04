function test_Email(n){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlPattern = /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi
    if (emailPattern.test(n) === true){
        return `Введена электронная почта ${n}`
    }
    else if (urlPattern.test(n) === true){
        return `Введён url адрес ${n}`
    }
    else {return 'Введённая строка не является электронной почтой или url адресом'}
}

process.stdin.on('data', data => {
  let n = data.toString().trim();
  console.log(test_Email(n));
});