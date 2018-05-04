window.onload=function(){
	var opicture=document.getElementById('picture');//获取最外层的盒子
	var olist=document.getElementById('list');//获取装载图片的盒子
	var buttons=document.getElementsByTagName('span');//获取小圆点的集合
	var oleft=document.getElementById('left');//获取左边的箭头
	var oright=document.getElementById('right');//获取右边的箭头
	var index=1;

    /*小圆点跟着图片一起切换*/
    function showbutton(){
        for(var i = 0;i < buttons.length;i++){
        	if(buttons[i].className=='on'){
        		buttons[i].className='';
        		break;
        	}
        }
        buttons[index-1].className='on';
    }
    /*图片的切换*/
    function animate(offset){
    	var newLeft = parseInt(olist.offsetLeft) + offset ;
    	olist.style.left=newLeft+'px';
    	if(newLeft > -450){
    		olist.style.left=-1800+'px';
    	}else if(newLeft < -1800){
    		olist.style.left=-450+'px';
    	}

    }
    /*点击右边的箭头*/
	oright.onclick=function(){
		if(index==4){
			index=1;
		}else{
			index+=1;
		}
		animate(-450);
		showbutton();
	
	}
	/*点击左边的箭头*/
	oleft.onclick=function(){
		if(index==1){
			index=4;
		}else{
			index-=1;
		}
		animate(450);
		showbutton();
		
	}
	/*点击小圆点时切换图片*/
	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick=function(){
			/*优化：当点击属于当前照片的小圆点时会返回，退出该函数*/
			if(this.className=='on'){
				return;
			}
			var myIndex=parseInt(this.getAttribute('index'));//getAttribute可以获取自定义属性
			var value=-450*(myIndex-index);
			animate(value);
			index=myIndex;
			showbutton();

		}
	}
	var timer;
	/*自动播放*/
	function play(){
		timer=setInterval(oright.onclick,3000);
	}
	play();
    /*停止*/
	function stop(){
		clearInterval(timer);
	}
	opicture.onmouseover=stop;//鼠标移入暂停
	opicture.onmouseout=play;//鼠标移开播放
}