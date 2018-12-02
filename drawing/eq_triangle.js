/*
* @param1:底边长度
*
* */
function eq_tran(long){
    if(long%2!=0){
        console.log("请输入偶数");
        return;
    }
    var longPart = Math.round(long/2);
    var tmp = "";
    for(var i=0;i<=long/2;i++){
        for(var l=0;l<=long;l++){
            if(l<(longPart-i)){
                tmp += "  ";
            }else if(l>(longPart+i)){
                tmp += "  ";
            }else{
                tmp += "* ";
            }
            // console.log(i);
        }
        console.log(tmp);
        tmp = "";
    }
}

function eq_tran_kong(long){
    if(long%2!=0){
        console.log("请输入偶数");
        return;
    }
    var longPart = Math.round(long/2);
    var tmp = "";
    for(var i=0;i<=long/2;i++){
        if(i == long/2){
            for (var l = 0; l <= long; l++) {
                if(l<(longPart-i)){
                    tmp += "  ";
                }else if(l>(longPart+i)){
                    tmp += "  ";
                }else{
                    tmp += "* ";
                }
            }
        }else {
            for (var l = 0; l <= long; l++) {
                if (l == (longPart - i)) {
                    tmp += "* ";
                } else if (l == (longPart + i)) {
                    tmp += "* ";
                } else {
                    tmp += "  ";
                }
                // console.log(i);
            }
        }
        console.log(tmp);
        tmp = "";
    }
}
eq_tran(process.argv[2]);
console.log("----------");
eq_tran_kong(process.argv[2]);
