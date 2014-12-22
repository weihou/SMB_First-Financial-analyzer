var pageId, nextPage;
var pagesLength = 6;
var productsByPage, answersByPage;
var pagesInOrder = ["page7","page2","page3","page4","page5"];

function isAllSelected(arrQuestions){
	var returnVal = true;
	for (var i=0; i<arrQuestions.length; i++){
		var elements = document.getElementsByName(arrQuestions[i]);
		if ((elements) && (elements.length > 0)){
			if ((elements[0].type == "radio")||(elements[0].type.indexOf("checkbox") > -1)){	//radio or checkbox
				var checked = false; 
				for (var j=0; j<elements.length; j++){
					if (elements[j].checked){
						checked = true;
						break;
					}
				}
				if (checked == false){
					returnVal=false;
				}
			}else if (elements[0].type.indexOf("select") > -1){	//select
				if (elements[0].value==""){				
					returnVal=false;
				}
			}
		}		
	}	
	return returnVal;
}

function resetContent() {
	$("#content").removeClass('done');
	$("#messageBox").html("");							
	$("#nextButton").addClass("disabled");
}


function clickDisabledNext(){
	$(".error").each(function(){
		$(this).removeClass("hide");
		if ($(this).hasClass("answered")){
			$(this).addClass("hide");
		}
	});

	alert("You have to answer all questions.");
}

function getParameterByName(name) {

    var match = RegExp('[?&]' + name + '=([^&]*)')
                    .exec(window.location.search);

    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
function buildRevisitQuery() {
	var returnStr = "&resultPage=";
	if (getParameterByName("resultPage")){
		returnStr += getParameterByName("resultPage");
	}else{
		returnStr +="";
	}
	return returnStr;
}
function buildProductsQuery(pageIndex, productsOfCurrentPage) {
	var returnStr = "";
	
	if (productsOfCurrentPage){
	}else{
		productsOfCurrentPage = "";
	}
	
	returnStr += productsOfCurrentPage+":";

	return returnStr;

}
function buildAnswersQuery(pageIndex) {
	var returnStr = "&answers=";
	var currentAnswers =""; 
	$ ('input:radio:checked').each(function(){
			currentAnswers += "A"+$(this).val();
		})
	if (answersByPage){
		if (answersByPage.length >pageIndex){
			answersByPage[pageIndex] = currentAnswers; 
			for (var i= 0; i <answersByPage.length; i++){
				returnStr += answersByPage[i]+":";
			}		
		}else{
			for (var i= 0; i <answersByPage.length; i++){
				returnStr += answersByPage[i]+":";
			}		
			returnStr += currentAnswers+":";
		}
	}else{
		returnStr += currentAnswers+":";
	}

	return returnStr;
}

function parseProducts() {
	var productsArr = [], 
		productsSelected = getParameterByName("products");
	if (productsSelected){
		productsArr = productsSelected.split(":");
	}
	return productsArr;
}

function parseAnswers() {
	var answersSelected = getParameterByName("answers");
	if (answersSelected){
		answersByPage = answersSelected.split(":");
	}
}

function showProducts(pageIndex) {
	var currentProducts;
	if (pageIndex && productsByPage[pageIndex]){
		currentProducts = productsByPage[pageIndex].split("P");
		$.each(currentProducts, function(i,v){showProduct(v)});
	}
}

function showAnswers(pageIndex) {
	var currentAnswers;
	if (answersByPage && answersByPage[pageIndex]){
		currentAnswers = answersByPage[pageIndex].split("A");
		$ ('input:radio').each(function(){
			if (($.inArray($(this).val(), currentAnswers))>-1){
				$(this).attr("checked", "checked");
			}
		})
	}
}
