// 厳密なエラーチェックするため
'use strict';　
// 変数や定数の有効範囲を限定したいためblockで囲む
{
    const btn = document.getElementById('btn');

    btn.addEventListener('click',()=>{
        const results =['大吉','小吉','凶','末吉'];
        // const n = ;
        // btn.textContent = results[Math.floor(Math.random()*results.length)];
　　　  const n = Math.random();
        if (n<0.05){
            btn.textContent ='大吉';
        }else if(n<0.2){
            btn.textContent = '小吉';
        }else{
            btn.textContent ='凶';
        }

    // switch(n){
    //     case 0:
    //         btn.textContent ='大吉';
    //     break    
    //     case 1:
    //         btn.textContent ='小吉';
    //     break    
    //     case 2:
    //         btn.textContent ='凶';    
    //     break
    // }
    });
}