function stringLength(str){
    var num = 0;
    for(var i in str){
        num++;
    }
    return num;
}
function stringFan(str){
    var newStr='';
    var length = stringLength(str);
    for(var i=length-1;i>=0;i--){
        newStr += str[i];
    }
    return newStr;
}
function stringSplit(pick,str){
    var arr = [];
    var index = 0;
    var arr_str = '';
    for(var i in str){
        if(str[i]==pick){
            arr[index] = arr_str;
            arr_str = '';
            index++;
            continue;          
        }
        arr_str += str[i];
    }
    if(arr_str == str){
        return false;
    }
    if(arr_str){
        arr[index] = arr_str;
    }
    return arr;
}
function stringJoin(pick,arr){
    var str = '';
    for(var i in arr){
        if(i == stringLength(arr)-1){
            str += arr[i];
        }else{
            str += arr[i] + pick;
        }
    }
    return str;
}
function stringIsNum(str){
    var num = [0,1,2,3,4,5,6,7,8,9];
    var tmp = 0;
    for(var i in str){
        for(var j in num){
            if(str[i]==j){
                tmp++;
            }
        }
    }
    if(tmp!=stringLength(str)){
        return false;
    }else{
        return true;
    }
}

function stringCon(pick,str){
    var pickLength = stringLength(pick);
    var strLength = stringLength(str);
    var pick_mirro = '';
    var num = 0;
    for(var i=0;i<strLength;i++){
        for(var j=i;j<(i+pickLength);j++){
            pick_mirro += str[j];
        }     
        if(pick_mirro == pick){
            num++;
        }
        pick_mirro = '';
    }
    return num;
}
function stringDollar(str){
    var newStr = '';
    var newStrPick = '';
    if(!stringSplit('.',str)){
        var str_arr = [str,''];
    }else{
        var str_arr = stringSplit('.',str);
    }
    for(var i=stringLength(str_arr[0])-1;i>=0;i-=3){
        for(var j=0;j<3;j++){
            if((i-j)>=0){
                newStrPick+=str[i-j];
            }
        }
        if((i-3)<0){
            newStr += newStrPick;
        }else {
            newStr += newStrPick + ',';
        }
        newStrPick="";
    }
    newStr = stringFan(newStr);
    if(str_arr[1]){
        return newStr+'.'+str_arr[1];
    }else{
        return newStr;
    }

}


exports.stringLength = stringLength;
exports.stringFan = stringFan;
exports.stringCon = stringCon;
exports.stringSplit = stringSplit;
exports.stringJoin = stringJoin;
exports.stringIsNum = stringIsNum;
exports.stringDollar = stringDollar;
