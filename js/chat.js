$(function(){
	/*建立socket连接，使用websocket协议，端口号是服务器端监听端口号*/
	var socket = io('ws://localhost:8081');
	/*定义用户名*/
	var uname = Math.ceil(Math.random()*10); ;

	/*登录*/

	/*发送消息*/
	$('.sendBtn').click(function(){
		sendMessage()
	});
	$(document).keydown(function(event){
		if(event.keyCode == 13){
			sendMessage()
		}
	})



	

	

	/*接收消息*/
	socket.on('receiveMessage',function(data){
		showMessage(data)
	})

	/*退出群聊提示*/
	

	

	/*发送消息*/
	function sendMessage(){
		var txt = $('#sendtxt').val();
		$('#sendtxt').val('');
		if(txt){
			socket.emit('sendMessage',{username:uname,message:txt});
		}
	}

	/*显示消息*/
	function showMessage(data){
		var html
		if(data.username === uname){
			html = '<div class="chat-item item-right clearfix"><span class="img fr"></span><span class="message fr">'+data.message+'</span></div>'
		}else{
			html='<div class="chat-item item-left clearfix rela"><span class="abs uname">'+data.username+'</span><span class="img fl"></span><span class="fl message">'+data.message+'</span></div>'
		}
		$('.chat-con').append(html);
	}

})