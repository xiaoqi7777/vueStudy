
// 二进制
// let str = 0001
// // 十进制 1
// let str1 = 1

/*    百十个
  1   00001
  2   00010
  3   00011
  
  9
  10

0000 0001
1111 1111


  */

  // 十进制转二进制
//  let rs1 = (255).toString(2) //11111111
//  let rs2 = (256).toString(2) //100000000
//  let rs3 = (257).toString(2) //100000001
//  let rs4 = (258).toString(2) //100000010
//  console.log(rs1)
//  console.log(rs2) 
//  console.log(rs3)
//  console.log(rs4)

// 其他进制 转换成十进制
// let rs1 =  parseInt(0000,1);
// console.log(rs1);

// ['11','22','33'].map((item,index)=>{
//   console.log(item,index)
// })

// let arr =  ['11','22','33']
// arr = arr.map((i,index)=>parseInt(i,index))
// console.log(arr)


// 0000 0000 0000 0000
// console.log(Math.pow(2,16))


// 整数部分:除2取余,直到商为0,最先得到的余数是最低位,最后的余数是高位
// 小数部分:乘2取整,直到积为0或者精确度要求为止,最先得到的整数是高位
// (3.5)10 = (11.1)2



/*
  原码            反码     补码  
  3 => 00011

*/ 
// 8个字节*8个位 = 64位
// 8位 == 1个字节,ArrayBuffer字节数组(每个都是8位),他里面存放的就是字节
// ArrayBuffer 默认放 8个位
// let buffer = new ArrayBuffer(8)//总位数 64

// 64位
// let buffer = new ArrayBuffer(8);// 8个字节的ArrayBuffer
// const int8Array = new Int8Array(buffer);// 1个整数占据8个位 
// console.log(int8Array.length)//  元素的长度8,1个字节占据8个位


// const int16Array = new Int16Array(buffer)// 1个整数占据16个位 
// console.log(int16Array.length)// 元素的长度4,1个字节占据16个位


// console.log(int8Array.buffer === buffer)// true
// console.log((0.1).toString(2)) // 0.0001100110011001100110011001100110011001100110011001101
// console.log((0.2).toString(2)) // 0.001100110011001100110011001100110011001100110011001101
// console.log((0.3).toString(2)) // 0.010011001100110011001100110011001100110011001100110011
// console.log(0.1+0.2 === 0.3)

// console.log(0.2+0.2 === 0.4)

// //  0.1 0.2 0.3 0.4 转换 二进制都是无限循环
// console.log((0.5).toString(2)) 

// console.log((0.4).toString(2))
// console.log(0.4+0.2)

/*
  负数的补码 + 正数的补码 = 0

  负数              正数
  原码  1 001011    0 001011
  反码  1 110100    1 110101
  补码  1 110101

  4     +   (-4)  = 0
  00100 +   10100 
  00100 +   11011(反码)
  00100 +   11100(补码)
*/
console.log(parseInt(1000001011,2))