
/*function myFunction(list){
    var text = "";
    var inputs = document.querySelector("input[type=text]");

        text =inputs.value;
    
    var li = document.createElement("li");
    var node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
}*/
$(document).ready(function(){
	console.log("hi");
	var friends=[];
	var billname;
	
	$("#addfriends").click(function(){
	
		var text=$("[type='text']").val();
		$("#friend_name").val("");

		if(text != ""){
				 
			$('#list').find('.error').remove();
			
			//$("#list").append("<li>" + text + "</li>"); 
							 
			 $("#list").append("<li>" + text +"<button id=\"delete\" class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#deletemodal\">" + "<span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\">" + "</span>"  + "Delete" + "</button>" + "</li>");
			 
			//console.log(text);
			friends.push(text);
			//console.log("friends listmis" + friends); 
			for(var i=0;i<friends.length;i++){
			 
				console.log("friends list " + friends[i]);
			}
		}
		else{
				console.log("cant be empty");
				$('#list').append('<label class="error">' + "Enter some Friend name and then press Add" + '</label>');
		}
	});

	console.log("friends list" + friends);
	
	$("#btnYes").on("click", function (e) {
		
    console.log("hiiii");
     //e.preventDefault();
	console.log( $(this).parent().parent().parent().parent().parent());
	//$(this).parent().parent().parent().remove();
    //console.log($(this).parent().parent().parent().parent().parent().parent().parent());
	
	});
		
	$("#addbills").click(function(){
        $("#addModal").modal({keyboard: true});
		
    });
	
	$('#addModal').on('show.bs.modal', function () {
		console.log("entering here");
		//$("#billDetails").val("Nivetha Store bill"); // to know how to set a va
		$('#addBillPaidByOptions').empty();
	    $('#addBillFriendsOptions').empty();
		
		$('#addBillPaidByOptions').append($('<option>', { 
						//value: item,
						text : "You"
					}));
         
			$.each(friends, function (i, item) {
					$('#addBillPaidByOptions').append($('<option>', { 
						//value: item,
						text : item 
					}));
					console.log("friends looped through each");
			});
			$.each(friends, function (i, item) {
					$('#addBillFriendsOptions').append($('<option>', { 
						//value: item,
						text : item 
					}));
					console.log("friends looped through each");
			});
			
	});
	
	/*=====================
	$('#addBillFriendsForm').click(function(e){
  
      //alert($('#billDetails').val());
      /*
      $.post('http://path/to/post', 
         $('#myForm').serialize(), 
         function(data, status, xhr){
           // do something here with response;
         }); 
      
	  billname=$("#billDetails").val();
	  //$("#billList").text(billname); // to put value to li


	  $("#Bill").append('<li><a href="#"><span>' +billname+'</span></a></li>');
	  
	  e.preventDefault();  // tis line &
	  $("#addModal").modal( 'hide' );// tis line ,both are necessary to close the modal after form submit,try commenting both or either one to know the difference
	});
	===============*/
     $('#modalSubmit').on("click", function(e) {
		 billname=$("#billDetails").val();
		  //$("#billList").text(billname); // to put value to li
		 $("#Bill").append('<li><a href="#"><span>' +billname+'</span></a></li>');
		  e.preventDefault();  // tis line &
	      $("#addModal").modal( 'hide' );// tis line ,both are necessary to close the modal after form submit,try commenting both or either one to know the difference
		 
	 });
	
});


    