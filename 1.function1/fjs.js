
function reverseString(message){
    var str2="";
    if(message.length>0){//判断传入的参数是否为空；
        var str_arry=message.split("");//把字符串切割数组
　　　　 for(var i=message.length-1;i>=0;i--){//利用for循环从后往前输出数组；达到想要的效果
　　　　　str2+=str_arry[i];
　　　　　　　}
        console.log(str2);
　　　　}
    
　}
reverseString('hello');//调用这个函数