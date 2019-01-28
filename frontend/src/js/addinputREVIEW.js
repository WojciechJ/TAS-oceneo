
    $("#add_A").click(function() {
    	var lastField_A = $("#good div:last");
        var intId_A = (lastField_A && lastField_A.length && lastField_A.data("idx") + 1) || 1;
        var fieldWrapper_A = $("<div class=\"row col-sm\" style=\"margin-bottom:15px\" id=\"field" + intId_A + "\"</div>");
        fieldWrapper_A.data("idx", intId_A);
        var fName_A = $("<div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" maxlength=\"25\"/></div>");

        var removeButton_A = $("<div class=\"col-sm-1\"><input type=\"button\" class=\"remove btn btn-outline-primary\" value=\"Usuń\"></input></div>");
        removeButton_A.click(function() {
            $(this).parent().remove();
        });
        fieldWrapper_A.append(fName_A);

        fieldWrapper_A.append(removeButton_A);
        $("#good").append(fieldWrapper_A);
    });




    $("#add_B").click(function() {
    	var lastField_B = $("#bad div:last");
        var intId_B = (lastField_B && lastField_B.length && lastField_B.data("idx") + 1) || 1;
        var fieldWrapper_B = $("<div class=\"row col-sm\" style=\"margin-bottom:15px\" id=\"field" + intId_B + "\"</div>");
        fieldWrapper_B.data("idx", intId_B);
        var fName_B = $("<div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" maxlength=\"25\"/></div>");

        var removeButton_B = $("<div class=\"col-sm-1\"><input type=\"button\" class=\"remove btn btn-outline-primary\" value=\"Usuń\"></input></div>");
        removeButton_B.click(function() {
            $(this).parent().remove();
        });
        fieldWrapper_B.append(fName_B);

        fieldWrapper_B.append(removeButton_B);
        $("#bad").append(fieldWrapper_B);
    });



	    
	$(".btnrating").on('click',(function(e) {
	
	var previous_value = $("#selected_rating").val();
	
	var selected_value = $(this).attr("data-attr");
	$("#selected_rating").val(selected_value);
	
	$(".selected-rating").empty();
	$(".selected-rating").html(selected_value);
	
	for (i = 1; i <= selected_value; ++i) {
	$("#rating-star-"+i).toggleClass('btn-active');
	$("#rating-star-"+i).toggleClass('btn-default');
	}
	
	for (ix = 1; ix <= previous_value; ++ix) {
	$("#rating-star-"+ix).toggleClass('btn-active');
	$("#rating-star-"+ix).toggleClass('btn-default');
	}
	
	}));
	
		

