/**
 * 
 */
window.onload = function() {
			
			alert("hi")
		 
			const pwreg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
		alert("first")
			$("#yes").on("click", function() {
			/*	alert("hi")
				alert('전')
			alert($("#id").val())
			const id = $("#id").val()
			samechk({id:id})
			alert('후')*/
				
				
				
				
				if ($("#email").val() != "" && $("#id").val() != "" && $("#pw").val() != "") {

					if (!pwreg.test($("#pw").val())) {
						$("#msg").html("8 ~ 16자 영문, 숫자 조합만 입력 가능합니다.")
						$("#msg").css("color", "red");
					} else {
						
						// if($("#msg").text ==""){
						// $("#naverjoinform").submit();
						// setTimeout(function() {
						// window.close();
						// }, 5);
						// }else{
						// alert("안됨")
						// }
					}

				} else if ($("#email").val() == "" || $("#id").val() == "") {
					$("#msg").html("회원님의 정보를 정상적으로 가져오지 못했습니다.")
					$("#msg").css("color", "red");
				} else if ($("#email").val() != "" && $("#id").val() != "" && $("#pw").val() == "") {
					$("#msg").html("비밀번호를 입력해 주세요.")
					$("#msg").css("color", "red");
				} else {
					alert("실패3")
				}
			})
			
//			 function samechk(id){
//				$.ajax({
//					type:"post",
//					url:"/member/samechk",
//					data: JSON.stringify(id),
//					contentType:"application/json; charset=utf-8",
//					success:function(ms.samechk(mvo)){
//						if(result=="canUse"){
//							alert("canuse")
//						}else{
//							$("#msg").html("이미 가입된 아이디입니다.")
//							$("#msg").css("color", "red");
//						}
//					}
//				} 
			}  

		}