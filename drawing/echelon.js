function echelon(shang,tall) {
    var tmp = "";
    shang = Number(shang);
    tall = Number(tall);
    var xia = shang+tall;
    for(var i=0;i<=tall;i++){
        for(var l=0;l<=xia;l++){
            if(l>shang+i){
                tmp += "  ";
            }else{
                tmp += "* ";
            }
        }
        console.log(tmp);
        tmp = "";
    }
}
function echelon_kong(shang,tall){
    var tmp = "";
    shang = Number(shang);
    tall = Number(tall);
    var xia = shang+tall;
    for(var i=0;i<=tall;i++){
        if(i==0 || i==tall){
            for(var l=0;l<=xia;l++){
                if(l>shang+i){
                    tmp += "  ";
                }else{
                    tmp += "* ";
                }
            }
        }else{
            for(var l=0;l<=xia;l++){
                if(l==shang+i || l==0){
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
echelon(process.argv[2],process.argv[3]);
console.log("----------------");
echelon_kong(process.argv[2],process.argv[3]);