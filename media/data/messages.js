var products = [
	{
		name: "Cash Analysis Account ",
		description: "<p></p>"
	},
	{
		name: "BA Account",
		description: "<p></p>"
	},
	{
		name: "Branch Depository",
		description: "<p></p>"
	},
	{
		name: "Courier Service",
		description: "<p></p>"
	},
	{
		name: "Recommend RDC",
		description: "<p></p>"
	},
	{
		name: "LockBox Services",
		description: "<p></p>"
	},
	{
		name: "Merchant Services",
		description: "<p></p>"
	},
	{
		name: "Online ACH &amp; Wire Services",
		description: "<p></p>"
	},
	{
		name: "Positive Pay",
		description: "<p></p>"
	},
	{
		name: "Account Recon: &gt; $10M",
		description: "<p></p>"
	},
	{
		name: "Controlled Disbursement: &gt; $10M",
		description: "<p></p>"
	},
	{
		name: "Business Credit Card",
		description: "<p></p>"
	},
	{
		name: "ACH Positive Pay",
		description: "<p></p>"
	},
	{
		name: "SBA Lending",
		description: "<p></p>"
	},
	{
		name: "Line of Credit",
		description: "<p></p>"
	},
	{
		name: "CRE Lending",
		description: "<p></p>"
	},
	{
		name: "Term Financing",
		description: "<p></p>"
	},
	{
		name: "Leasing",
		description: "<p></p>"
	}

];


function showProduct(productId, bShowLink){
	if (productId>=0){
		if( $('#product_'+productId).length ){
			$('#product_'+productId).show();
		}else{
			if(products[productId]){
				var strDivHtml = "<div class='product' id='product_"+productId+"'>";
				if (bShowLink){
					strDivHtml +="<div class='products_header'>";
					strDivHtml +="<h3>"+products[productId].name;
					strDivHtml +="<span class='editlink'><a href="+products[productId].page+""+window.location.search+">Edit my answers"+"</a></span>"+"</h3></div>";
				}else{
					strDivHtml +="<h3>"+products[productId].name+"</h3>";
				}
				strDivHtml +=products[productId].description;
				strDivHtml +="</div>";
				$("#recommendation").append(strDivHtml);
				$('#recommendationBox').addClass("done");
			}
		}	
	}else{
		hideProduct(Math.abs(productId));
	}
}

function showPageTitle(productId){
	if (productId>=0){
		var strDivHtml = "<div class='productTitle' id='productTitle_"+productId+"'>";
		strDivHtml +="<h2>"+products[productId].pageTitle;
		strDivHtml +="<span class='editlink'><a href="+products[productId].page+""+window.location.search+">Edit my answers"+"</a></span>"+"</h2></div>";
		$("#recommendation").append(strDivHtml);
	}
}


function hideProduct(productId){
	if( $('#product_'+productId).length ){
		$('#product_'+productId).hide();
	}
}

