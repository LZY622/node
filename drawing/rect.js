function rect(long,width){
    var str = '';
    for(var w=0;w<=width;w++) {
        if(w==0 || w==width){
            for (var i = 0; i <= long; i++) {
                str += "* ";
            }
            console.log(str);
            str = '';
        }else{
            for (var i = 0; i <= long; i++) {
                if(i==0 || i==long){
                    str += "* ";
                }else{
                    str += "  ";
                }
            }
            console.log(str);
            str = '';
        }


    }

}
function rect_shi(long,width){
    var str = '';
    for(var w=0;w<=width;w++) {
        for (var i = 0; i <= long; i++) {
            str += "* ";
        }
        console.log(str);
        str = '';
    }

}

rect(process.argv[2],process.argv[3]);
console.log("----------");
rect_shi(process.argv[2],process.argv[3]);