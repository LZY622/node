function zhi_tran(long){
    var tmp = "";
    long = Number(long);
    for(var i=0;i<=long;i++){
        for(var l=0;l<=long;l++){
            if(l>i){
                tmp += "  ";
            }else{
                tmp += "* ";
            }
        }
        console.log(tmp);
        tmp = "";
    }
}

function zhi_tran_kong(long){
    var tmp = "";
    long = Number(long);
    for(var i=0;i<=long;i++){
        if(i==0 || i==long){
            for(var l=0;l<=long;l++){
                if(l>i){
                    tmp += "  ";
                }else{
                    tmp += "* ";
                }
            }
        }else{
            for(var l=0;l<=long;l++){
                if(l==i || l==0){
                    tmp += "* ";
                }else{
                    tmp += "  ";
                }
            }
        }

        console.log(tmp);
        tmp = "";
    }
}
zhi_tran(process.argv[2]);
console.log("----------------");
zhi_tran_kong(process.argv[2]);