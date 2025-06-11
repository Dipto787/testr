function callBack(){

    let element= document.querySelector(' .frist-one');
    
    
    
    if(element.innerHTML==='subscribe'){
        element.innerHTML='subscribed';
    }else{
        element.innerHTML='subscribe';
    }


}


function calculetor(){

    const handread=document.querySelector('.hello');

    let bunny = Number(handread.value); 
    console.log(bunny);

    if(bunny<40){
          bunny=bunny+15;
    } 

    


document.querySelector('.answar')
    
.innerHTML=`$${bunny}`;

}

























