"use strict"

for(let i=1; i<=100; i++){
    tubson = true;
        for(let ii = 2; ii<i; ii++){
            if(i % ii == 0){
                tubson = false;
                break;
            }
        }
        if(tubson == true){
            console.log(i);
        }
    }
