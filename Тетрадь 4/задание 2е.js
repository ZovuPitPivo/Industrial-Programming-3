function precision( n ) { 
  return Math.max( Number.MIN_VALUE, 2 ** Math.floor( Math.log2( n ) ) * Number.EPSILON );
}

process.stdin.on("data", data =>{
  const number = parseInt(data);
  const nextSmallest = precision(number).toString();
  let degri = parseInt(nextSmallest.slice(nextSmallest.length - 2, nextSmallest.length)) - 1;
  console.log(`${number},${"0".repeat(degri)}${nextSmallest[0]}`)
})