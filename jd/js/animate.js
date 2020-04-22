function animate(obj,target,callback){
    //先清除以前的定时器
    clearInterval(obj.timer);
    // var timer = setInterval(function(){ 
    // 1.每次调用m函数都会创建一个变量，就会在内存中开辟一个空间，浪费内存空间
    // 2.每次都会创建相同名字的计时器
    // 给不同元素添加方法来避免问题 
    obj.timer = setInterval(function(){ 
            // 缓动动画公式 (目标距离 - 现在距离) / 10
        var a = (target - obj.offsetLeft) / 10;
        a = a > 0 ? Math.ceil(a):a = Math.floor(a);
        if(obj.offsetLeft == target){
            clearInterval(obj.timer)
            // 回调函数写到定时器结束里面
            // if(callback){
            //     // 调用回调函数
            //     callback();
            // }
            callback && callback(); 
        }
    obj.style.left = obj.offsetLeft + a + 'px';
    },30)
        
}