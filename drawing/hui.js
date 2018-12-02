function hui(tall){
    var str = '';
    for(var i=0;i<=tall;i++){
        if(i==0 || i==tall){
            for(var l=0;l<=tall;l++){
                str += "* ";
            }
        }else if(i==6 || i==tall-6){
            for(var l=0;l<=tall;l++){
                if(l==0 || l==tall){
                    str += "* ";
                }else if(l>=6 && l<=tall-6){
                    str += "* ";
                }else{
                    str += "  ";
                }
            }
        }else if(i>6 && i<tall-6){
            for(var l=0;l<=tall;l++){
                if(l==0 || l==tall){
                    str += "* ";
                }else if(l==6 || l==tall-6){
                    str += "* ";
                }else{
                    str += "  ";
                }
            }
        }else{
            for(var l=0;l<=tall;l++){
                if(l==0 || l==tall){
                    str += "* ";
                }else{
                    str += "  ";
                }
            }
        }
        console.log(str);
        str = '';
    }
}

hui(18);