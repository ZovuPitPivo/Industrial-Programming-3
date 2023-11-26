// Задание 2
function thenDockIsLoaded(){
  return new Promise((resolve) => {
    if (document.readyState === 'loading'){
      documenet.addEventListener('DOMContentLoaded', resolve);
    }else{
      resolve()
    }
  });
}

thenDockIsLoaded().then(() => {
  console.log('DOM is loaded');
}).catch((error) =>{
  console.error('Error', error)
});