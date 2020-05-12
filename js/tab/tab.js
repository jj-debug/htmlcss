var that;
class Tab{
    constructor(id){
        that = this;
        this.id = document.querySelector(id);
        this.ul = document.querySelector('ul');
        this.tab_body = document.querySelector('.tab-body');
        this.add = document.querySelector('.nav-right');
        this.int();
    }
    // 动态的添加元素，需要重新获取
    updateNode(){
        this.lis = document.querySelectorAll('li');
        this.section = document.querySelectorAll('section');        
        this.span = this.ul.querySelectorAll('span');
        this.liactive = document.querySelector('.liactive');
    }
    int(){
        this.updateNode()
        // 初始化操作让相关元素绑定事件
        this.add.onclick = this.addtab;
        for(var i = 0;i < this.lis.length;i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggletab;
            this.span[i].index = i;
            this.span[i].onclick = this.removeTab;
        }
    }
    clear(){
        for(var i = 0;i < this.lis.length;i++){
            that.lis[i].className = ''
            that.section[i].className = ''
        }
        
    }
    // 切换功能
    toggletab(){
        that.clear()
        this.className = 'liactive';
        that.section[this.index].className = 'conactive'
        
    }
    // 添加功能
    addtab(){
        that.clear()
        var html = '<li class="liactive"><div>测试</div><span><a href="javascript:;">x</a></span></li>'
        var html2 = '<section class="conactive" style="display: none">测试' + Math.random() + '</section>'
        that.ul.insertAdjacentHTML("beforeend",html)
        that.tab_body.insertAdjacentHTML('beforeend',html2);
        that.int()
    }
    // 删除功能
    removeTab(e){
        // 阻止li的冒泡事件
        e.stopPropagation()
        // e.cancelBubble
        that.lis[this.index].remove();
        that.section[this.index].remove();
        // 初始化，重新获取一遍所有li
        that.int();
        // console.log(that.liactive);
        // console.log(that.liactive.index);
        // console.log(this.index)
        // console.log(that.lis.length);


        var index = this.index;
        // 如果删除了选中状态的li，即找不到class为liactive的li
        // if(!that.liactive){
        //     // 如果删除的是被点击的第一个li，
        //     if(index == 0){
        //         that.lis[index] && that.lis[0].click()
        //     }else{  // 如果删除的是其他被点击的li
        //         index--;
        //         that.lis[index] && that.lis[index].click()
        //     }
        // }

        if(that.liactive) return;
        index--;
        that.lis[index] && that.lis[index].click()
        // that.lis[this.index - 1].className = 'liactive';
        // that.section[this.index - 1].className = 'conactive';
    }
}
new Tab('#tab')