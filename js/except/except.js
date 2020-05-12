// var fruit = prompt('请输入想要咨询的水果');
// switch(fruit){
//     case '榴莲': alert('榴莲的价格是"35"') ;
//     break;
//     case '苹果': alert('苹果的价格是5');
//     break;
//     default: alert('没有这种水果');
// }

// var sum = 0;        // 1~100求和
// for(i=1;i<=100;i++){
//     sum +=i;
// }
// console.log(sum);

// var num = prompt('请问班里有多少人'),
//     sum =0;
// for(i = 1;i<=num;i++){
//     var score = prompt('请输入第'+i+'个人的成绩');
//     // console.log(sum)
//     sum = sum + parseFloat(score);
// }
// console.log(sum)

// var rows = prompt('请输入需要打印几行星星'),
//     cols = prompt('一行需要打印几颗星星'),
//     star = '';
// for(i = 1;i <= rows;i++){
//     for(j =1;j<= cols;j++){
//         star = star+'☆';
//     }
//     star+='\n'
// }
// console.log(star);

// var bank = prompt('请选择要进行的操作\n1.存钱\n2.取钱\n3.显示余额\n4.退出');
// switch(bank){
//     case '1': var save = prompt('要存多少钱');
//             alert('还有'+ save + 100 +'元');
//     break;
// }

// var arr = [23,34,2,6,7,8];          // 冒泡排序
// for(i = 0 ; i < arr.length ; i++){
//     for(j = 0 ; j < arr.length - 1 -i ;j++){
//         if(arr[j] < arr[j + 1]){
//             var tpem = arr[j + 1];
//             arr[j + 1] = arr[j];
//             arr[j]= tpem;
//         }
//     }
// }
// console.log(arr)

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
// }
// var num = getRandomInt(1,10);
// console.log(num);
// var i = 1;
// while(i <= 2){
//     var n = prompt('请输入一个数字');
//     if(n == num){
//         alert('恭喜你猜对了');
//         break;
//     }else if(n > num){
//         alert('这个数大了');
//         i++;
//     }else if(n < num){
//         alert('这个数小了');
//         i++;
//     }
// }

// var day = new Date();
// console.log(day);           //如果没有参数，返回当前系统的事件
// console.log(day.getFullYear());     //返回年份  2020
// console.log(day.getMonth());        //返回月份  返回数字比正常月份小1 三月返回2
// var moth = day.getMonth() + 1;
// console.log(day.getDate());         //返回日期  15
// console.log(day.getDay());          //返回星期  星期天会返回0
// var week = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
// console.log(day.getFullYear() + '年' + moth + '月' + day.getDate() + week[day.getDay()]);

// 制作倒计时
// var nowTime = +new Date();
// var inputTime = +new Date('2020-4-4 23:00:00');
// var times = (inputTime - nowTime) / 1000;
// console.log(times)
// var h = parseInt(times / 60 / 60 % 24);
// console.log(h);
// var m = parseInt(times / 60 % 60);
// console.log(m);

// var strW = 'qwebbertmbtidybjb';
// var w = strW.indexOf('b');
// function getW(str){
//   while(w != -1){
//     console.log(w);
//     w = str.indexOf('b',w + 1);
//   }
// }
// getW(strW);

// var obj = {
//     a: 1,
//     b: 1,
// }
// console.log(obj['a'])

// function doAdd(num1,num2){
//     arguments[1] = 10;
//     alert(arguments[0] + num2);
// }
// doAdd(30);

// var apple = 1;
// function getA(a){
//     a = 10;
// }
// getA(apple);
// console.log(apple)

// var arr = {
//     name: 'Andy',
// };
// function getAbc(abc){
//     abc = {};
//     abc.age = 18;
//     // abc = {};
//     abc.sex = 'men';
// }
// getAbc(arr);
// console.log(arr)

// var colors = ['red','pink','blue'];
// alert(colors.toString());

//定义多个属性
// var book = {};
// Object.defineProperties(book,{
//   _year: {          // 数据属性_year
//     writable:true,  // 在使用Object.defineProperty、Object.defineProperties 或 Object.create 函数的情况下添加数据属性，writable、enumerable和configurable默认值为false。
//     value: 2004,
//   },
//   edition: {        // 数据属性edition
//     // writable:true,
//     value: 1,
//   },
//   year:{            //访问器属性year
//     get: function(){
//       return this._year;
//     },
//     set: function(newValue){
//       if(newValue > 2004){
//         this._year = newValue;
//         this.edition += newValue - 2004;
//       }
//     }
//   }
// });
// console.log(book._year);
// console.log(book.edition);
// book.year = 2005;
// console.log(book._year);
// console.log(book.edition);
// var descriptor = Object.getOwnPropertyDescriptor(book,'_year');
// console.log(descriptor.writable);

// 调整窗口事件
// window.addEventListener('resize',function(){
//     console.log(1)
// })

// 立即执行函数(function(){})()
// (function flexible(window,document) {
//     // 获取的HTML 的根元素
//     var docEl = document.documentElement;
//     console.log(1)
//     console.log(docEl);
//     console.log(1)
//     // // dpr 物理像素比
//     var dpr = window.devicePixelRe || 1 // 当前浏览器有物理像素比，如果没有则当1来看
//     console.log(devicePixelRatio)

//     // adjust body  font size
//     function setBodyFontSize(){
//         // 如果页面中有body这个元素，就设置body的字体大小
//         if (document.body) {
//             document.body.style.fontSize = (12 * dpr) + 'px';
//         }else{
//             // 如果没有body这个元素，就等着页面上的主要元素加载完毕再去设置字体大小
//             document.addEventListener('DOMContentLoaded', setBodyFontSize)
//         }
//     }
//     setBodyFontSize();

//     // set 1rem = viewWidth / 10   设置我们html 元素的文字大小
//     function setRemUnit(){
//         var rem = docEl.clientWidth / 10
//         docEl.style.fontSize = rem + 'px';
//     }
//     setRemUnit()

//     // reset rem unit on page resize  当我们页面尺寸大小发生变化的时候，就要重新设置rem的大小
//     window.addEventListener('resize',setRemUnit)
//     // pageshow 是我们重新加载页面触发的事件
//     window.addEventListener('pageshow',function(e){
//         // e.persisted 返回的是说如果页面时从缓存取过来的页面，也需要重新计算一下rem的大小
//         if(e.persisted){
//             setRemUnit()
//         }
//     })
// })(window,document);

// 页面滚动事件
var span = document.querySelector("span");
document.addEventListener("scroll", function(e) {
  console.log(window.pageYOffset); // 被卷去的头部
  if (window.pageYOffset > 100) {
    span.style.display = "block";
  } else {
    span.style.display = "none";
  }
});

// 封装动画函数
var nav = document.querySelector('.nav');
var but = document.querySelector('button');
function m(obj,target){
// 1.每次调用m函数都会创建一个变量，就会在内存中开辟一个空间，浪费内存空间
// 2.每次都会创建相同名字的计时器
    // var timer = setInterval(function(){ 
    clearInterval(obj.timer)
// 给不同元素添加方法来避免问题 
    obj.timer = setInterval(function(){ 
        if(obj.offsetLeft >= target){
        clearInterval(obj.timer)
    }
    // 缓动动画公式 (目标距离 - 现在距离) / 10
    obj.style.left = obj.offsetLeft + (target - obj.offsetLeft) / 10 + 'px';
    },30)
}
but.addEventListener('click',function(){
    m(nav,200)  
})