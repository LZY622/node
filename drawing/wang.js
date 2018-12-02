function wang(di,tall){
    var str = '';
    for(var i=0;i<=tall;i++){
        if(i==0){
            for(var l=0;l<=di;l++){
                if(l<4 || l>di-4){
                    str += "  ";
                }else{
                    str += "* ";
                }
            }
        }else if(i==tall/2){
            for(var l=0;l<=di;l++){
                if(l<6 || l>di-6){
                    str += "  ";
                }else{
                    str += "* ";
                }
            }
        }else if(i==tall){
            for(var l=0;l<=di;l++){
                str += "* ";
            }
        }else{
            for(var l=0;l<=di;l++){
                if(l==di/2){
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
wang(16,10);