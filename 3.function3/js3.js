
   function alphabetSort(message){
    // wirte your code here
    //var a="1我a2你b3他d";   //要排序的字符串a
    var b=message.split("");       //分割字符串a为数组b
    b.sort();              //数组b升序排序（系统自带的方法）
    var c=b.join("");        //把数组b每个元素连接成字符串c
    console.log(c);    
  }
  alphabetSort('hello'); // should return 'ehllo'
  