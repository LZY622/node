function tran(tall){
    tall = Number(tall);
    var di = tall+tall/2;
    var str = "";
    for(var i=0;i<=tall;i++){
        for(var l=0;l<=di;l++){
            if(l>=tall-i && l<=tall+parseInt(i/2)){
                str += "* ";
            }else{
                str += "  ";
            }
        }
        console.log(str);
        str = "";
    }

}
function tran_kong(tall){
    tall = Number(tall);
    var di = tall+tall/2;
    var str = "";
    for(var i=0;i<=tall;i++){
        for(var l=0;l<=di;l++){
            if(i==tall){
                str += "* ";
            }else{
                if(l==tall-i || l==tall+parseInt(i/2) && i%2==0){
                    str += "* ";
                }else{
                    str += "  ";
                }
            }

        }
        console.log(str);
        str = "";
    }
}
tran(process.argv[2]);
console.log("----------");
tran_kong(process.argv[2]);