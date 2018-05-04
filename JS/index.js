window.onload=function() {
	var oinput=document.getElementsByTagName('input');//获得input的集合
	var otips=document.getElementsByClassName('tips');//获得提示信息的集合

	var name=oinput[0];//获得登录框的用户和密码input
	var pwd=oinput[1];
	var oname=otips[0];//获得登陆框的提示信息
	var opwd=otips[1];
 
	/*聚焦到用户名（第一个input）时显示的提示信息*/
	name.onfocus=function(){
		oname.style.display='block';
		oname.innerHTML='<b>请输入手机号码</b>';
	}
	/*用户名失去焦点时显示的提示信息*/
	name.onblur=function(){
		if(this.value==""){
			oname.innerHTML='<b>不能为空！</b>';
		}
	}
	/*聚焦到登陆框的密码（第二个input）时显示的提示信息*/
	pwd.onfocus=function(){
		opwd.style.display='block';
		opwd.innerHTML='<b>请输入密码</b>';
	}
	/*密码框失去焦点时显示的提示信息*/
	pwd.onblur=function(){
		if(this.value==""){
			opwd.innerHTML='<b>不能为空！</b>';
		}
	}

	var login=document.getElementById('login');//获得超链接（立即注册）
	var font=document.getElementById('font');//获得包含英文与中文的div
	var encroll=document.getElementById('encroll');//获得注册框
    /*点击id为login的元素，即超链接（立即注册）*/
    login.onclick=function(){
        font.style.display = 'none';
        encroll.style.display='block';
    }

    var phone=oinput[3];//获得注册框的三个input
	var pwd1=oinput[4];
	var pwd2=oinput[5];
	var ophone=otips[2];//获得注册框的提示信息
	var opwd1=otips[3];
	var opwd2=otips[4];
    /*聚焦到手机号码（第四个input）时显示的提示信息*/
	phone.onfocus=function(){
		ophone.style.display='block';
		ophone.innerHTML='<b>请输入手机号码</b>';
	}
	/*手机号码失去焦点时显示的提示信息*/
	phone.onblur=function(){
		var Reg=/^1(\d){10}$/gi;//以1开头，共11位数的手机号码
		if(this.value==""){
			ophone.innerHTML='<b>不能为空！</b>';
		}else if(!Reg.test(this.value)){
			ophone.innerHTML='<b>格式有误！</b>';
		}else {
			ophone.innerHTML='<b>OK！</b>';
		}	
	}
	/*聚焦到注册框的密码框（第五个input）时显示的提示信息*/
	pwd1.onfocus=function(){
		opwd1.style.display='block';
		opwd1.innerHTML='<b>6-16位字符（英文字符、数字、下划线），以数字开头，区分大小写</b>';
	}
	/*密码框失去焦点时显示的提示信息*/
	pwd1.onblur=function(){
		var Reg1=/^\d\w/g;//以数字开头，以英文字符、数字、下划线结尾
		if(this.value==""){
			opwd1.innerHTML='<b>不能为空！</b>';
		}else if (!Reg1.test(this.value)){
			opwd1.innerHTML='<b>格式有误！</b>';
		}
		else if(this.value.length<6&&this.value.length>16){
            opwd1.innerHTML='<b>格式有误！</b>';
		}
			else {
			opwd1.innerHTML='<b>OK！</b>';
		}
	}
	/*聚集到确认密码框（第六个input）时显示的提示信息*/
	pwd2.onfocus=function(){
		opwd2.style.display='block';
		opwd2.innerHTML='<b>再次输入密码</b>';
	}
	/*确认密码框失去焦点时显示的提示信息*/
	pwd2.onblur=function(){
		if(this.value==pwd1.value){
			opwd2.innerHTML='<b>OK！</b>';
		}else {
			opwd2.innerHTML='<b>两次输入的密码不一致！</b>';
		}
	}
}