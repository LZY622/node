function eq_eche(shang,tall){
    var tmp = "";
    shang = Number(shang);
    tall = Number(tall);
    var xia = shang+2*tall;
    for(var i=0;i<=tall;i++){
        for(var l=0;l<=xia;l++){
            if(l<tall-i || l>(shang+tall+i)){
                tmp += "  ";
            }else{
                tmp += "* "
            }
        }
        console.log(tmp);
        tmp = "";
    }
}
function eq_eche_kong(shang,tall){
    var tmp = "";
    shang = Number(shang);
    tall = Number(tall);
    var xia = shang+2*tall;
    for(var i=0;i<=tall;i++){
        if(i==0 || i==tall){
            for(var l=0;l<=xia;l++){
                if(l<tall-i || l>(shang+tall+i)){
                    tmp += "  ";
                }else{
                    tmp += "* "
                }
            }
        }else{
            for(var l=0;l<=xia;l++){
                if(l==tall-i || l==(shang+tall+i)){
                    tmp += "* ";
                }else{
                    tmp += "  "
                }
            }
        }
        console.log(tmp);
        tmp = "";
    }
}
eq_eche(process.argv[2],process.argv[3]);
console.log("----------------");
eq_eche_kong(process.argv[2],process.argv[3]);