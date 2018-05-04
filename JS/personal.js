window.onload=function(){
	var information=document.getElementById("information");//获取基本信息后面的设置图标
	var index=document.getElementById("index");//获取超链接（我的Here）
	var share=document.getElementById("share");//获取超链接（我的分享）
	var collect=document.getElementById("collect");//获取超链接（我的收藏）
	var message=document.getElementById("message");//获取超链接（消息通知）
	var oright=document.getElementsByClassName("right");//获取以上超链接的具体内容的集合
	var right1=oright[0];
	var right2=oright[1];
	var right3=oright[2];
    var right4=oright[3];
    var right5=oright[4];
    right2.style.display = 'none';
    right3.style.display = 'none';
    right4.style.display = 'none';
    right5.style.display = 'none';
    /*点击超链接（我的Here）*/
	index.onclick=function(){
		right1.style.display = 'block';
        right2.style.display = 'none';
        right3.style.display = 'none';
        right4.style.display = 'none';
        right5.style.display = 'none';
	}
	/*点击基本信息后面的设置图标*/
	information.onclick=function(){
        right1.style.display = 'none';
        right2.style.display = 'block';
        right3.style.display = 'none';
        right4.style.display = 'none';
        right5.style.display = 'none';
	}/*点击超链接（我的分享）*/
	share.onclick=function(){
		right1.style.display = 'none';
        right2.style.display = 'none';
        right3.style.display = 'block';
        right4.style.display = 'none';
        right5.style.display = 'none';
	}
	/*点击获取超链接（我的收藏）*/
	collect.onclick=function(){
		right1.style.display = 'none';
        right2.style.display = 'none';
        right3.style.display = 'none';
        right4.style.display = 'block';
        //right5.style.display = 'none';
	}/*点击获取超链接（消息通知）*/
	message.onclick=function(){
		right1.style.display = 'none';
        right2.style.display = 'none';
        right3.style.display = 'none';
        right4.style.display = 'none';
        right5.style.display = 'block';
	}
}

