function post_alert(word,type){
   if ( word == null || word === ''){
    console.warn("Please, write message in this function , post_alert('Your word')")
   }else{
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  if (type == null){
    const currentTime = `${hours}:${minutes}:${seconds}`;
    console.log(`[${currentTime}] `+word)
  }else{
    const currentTime = `${hours}:${minutes}:${seconds}, `;
    console.log(`[${currentTime}`+type+" ] "+word)
  }
  }
  if(word === "/help"){
    console.log('Tezikov Alert System © DK Studio 2025\n post_alert("word","type")\nSample answer: [00:00:00, type] word')
    console.error("Attention! You can't leave the function empty like this post_alert() <--- you can't do that, it's not even recommended to just leave it post_alert('') <--- the function won't work either")
   }
  
}



