

function getTimezoneOffsetInHours() {
    const offsetInMinutes = new Date().getTimezoneOffset();
    return offsetInMinutes / 60;
  }
  
  console.log(getTimezoneOffsetInHours());

