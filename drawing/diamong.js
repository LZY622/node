function diamond(tall){
    var tmp = "";
    for(var t=0;t<=tall;t++){
        if(t<=tall/2){
            for(var l=0;l<=tall;l++){
                if(l>=tall/2-t && l<=tall/2+t){
                    tmp += "* ";
                }else{
                    tmp += "  ";
                }
            }
        }else{
            for(var l=0;l<=tall;l++){
                if(l>=t-tall/2 && l<=tall-(t-tall/2)){
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

function diamond_kong(tall){
    var tmp = "";
    for(var t=0;t<=tall;t++){
        if(t<=tall/2){
            for(var l=0;l<=tall;l++){
                if(l==tall/2-t || l==tall/2+t){
                    tmp += "* ";
                }else{
                    tmp += "  ";
                }
            }
        }else{
            for(var l=0;l<=tall;l++){
                if(l==t-tall/2 || l==tall-(t-tall/2)){
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
diamond(process.argv[2]);
console.log("----------------");
diamond_kong(process.argv[2]);