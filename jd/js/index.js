window.addEventListener('load',function(){
    // 左右按钮的显示与隐藏
    var colL = document.querySelector('.col-l');
    var colR = document.querySelector('.col-r');
    var col2_t = document.querySelector('.col2-top'); 
    col2_t.addEventListener('mouseover',function(){
        colL.style.display = 'block';
        colR.style.display = 'block';
        clearInterval(timer);
        timer = null;
    }) 
    col2_t.addEventListener('mouseleave',function(){
        colL.style.display = 'none';
        colR.style.display = 'none';
        timer = setInterval(function(){
            colR.click();   // 手动调用点击事件
        },2000)
    });

    // 小圆圈的个数
    var col_ol = col2_t.querySelector('ol');
    var col_ul = col2_t.querySelector('ul');
    var col_li = col_ul.querySelectorAll('li');
    for(var i = 0;i < col_li.length;i++){
        // 创建小圆点
        var ol_li = document.createElement('li');
        ol_li.setAttribute('index',i);
        // 插入小圆点
        col_ol.appendChild(ol_li);
        // 小圆点的点击事件
        ol_li.addEventListener('click',function(){
            for(var i = 0;i < col_ol.children.length;i++){
                col_ol.children[i].className = '';
            }
            this.className = 'current';
            // 小圆点滑动
            var index = this.getAttribute('index');
            var ulWidth = col_li[0].offsetWidth;
            console.log(ulWidth);
            console.log(index);
            num = index;
            circle = index;
            animate(col_ul,-ulWidth * index)
        })
    }
    col_ol.children[0].className = 'current';



    // 克隆第一张图片
    var first = col_ul.children[0].cloneNode(true);
    // 插入到最后的图片
    col_ul.appendChild(first);



    // 创建一个变量控制左右按钮轮播效果
    var num = 0;
    // 创建一个变量控制小圆圈的播放
    var circle = 0;
    // 右侧按钮
    colR.addEventListener('click',function(){
        if(num == col_li.length){
            col_ul.style.left = 0;
            num = 0;
        }
        num++;  // 每点击一次右按钮，num+1，控制图片的滚动
        animate(col_ul,-num * 790);
        circle++;   // 每点击一次按钮，circle+1,使小圆点随图片显示
        console.log(circle)
        if(circle == col_ol.children.length){
            circle = 0;
            console.log(circle)
        }
        for(var i = 0;i < col_ol.children.length;i++){
            col_ol.children[i].className = '';
        }
        col_ol.children[circle].className = 'current';
    })

    // 左侧按钮
    colL.addEventListener('click',function(){
        if(num == 0){
            console.log(col_li.length)
            col_ul.style.left = -790 * (col_li.length) + 'px';
            num = col_li.length;
        }
        num--
        animate(col_ul,-num * 790);
        circle--;
        console.log(circle)
        if(circle == -1){
            circle = col_ol.children.length - 1;
            console.log(circle)
        }
        for(var i = 0;i < col_ol.children.length;i++){
            col_ol.children[i].className = '';
        }
        col_ol.children[circle].className = 'current';
    })

    // 自动播放
    var timer = setInterval(function(){
        colR.click();   // 手动调用点击事件
    },2000)
})