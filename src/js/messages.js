$(document).ready(function(){
	$("#form").submit(function(event){
		event.preventDefault()
		//console.log(input.val())
		$("#list").append("<li>"+ $("#message").val() +"</li>") 
		$("#message").val("")
		$("#list").scrollTop($('#list')[0].scrollHeight)
	})
})			