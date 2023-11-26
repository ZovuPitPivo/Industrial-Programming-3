// Задание 3
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function examle(){
  console.log('start');
  await sleep(2000);
  console.log('end');
}

examle();