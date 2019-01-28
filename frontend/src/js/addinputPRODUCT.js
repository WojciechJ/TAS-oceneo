$(document).ready(function() {
    $("#add").click(function() {
    		var lastField = $("#formbuilder div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        var fieldWrapper = $("<div class=\"row\" style=\"margin-bottom:15px\" id=\"field" + intId + "\"</div>");
        fieldWrapper.data("idx", intId);
        var fName = $("<div class=\"col-sm-5\"><input type=\"text\" maxlength=\"20\" class=\"form-control\" placeholder=\"Parametr\" /></div><div class=\"col-sm-5\"><input type=\"text\" maxlength=\"20\"class=\"form-control\" placeholder=\"Wartość\" /></div>");
     
        var removeButton = $("<div class=\"col-sm-2\"><input type=\"button\" class=\"remove btn btn-outline-primary\" value=\"Usuń\"></input></div>");
        removeButton.click(function() {
            $(this).parent().remove();
        });
        fieldWrapper.append(fName);
   
        fieldWrapper.append(removeButton);
        $("#formbuilder").append(fieldWrapper);
    });
   
});