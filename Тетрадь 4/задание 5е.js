function clearNumb(ph, cd){
      const clear = /[^0-9]/g
      let arr_num = []
      arr_num.push(ph.toString().replace(clear,''))
      arr_num.push(cd.toString().split('@')[0])
      return arr_num
  }

  let ph = '';
  let cd = '';

  process.stdin.on('data', data => {
      const input = data.toString().trim().split(' ');
      ph = input[0];
      cd = input[1];
      const arr = clearNumb(ph, cd);
      console.log(arr);
    });