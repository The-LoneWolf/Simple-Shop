
	var num1 = $.session.get("product1");
	var num2 = $.session.get("product2");
	var num3 = $.session.get("product3");
	
	if(parseInt($('input:text.count-1').val()) == 0 && parseInt($('input:text.count-2').val()) == 0 && parseInt($('input:text.count-3').val()) == 0){
		$("#footer-btn").hide();
	}

	$('.button-count-1:first-child').click(function(){
		num1 = parseInt($('input:text.count-1').val());
		num2 = parseInt($('input:text.count-2').val());
		num3 = parseInt($('input:text.count-3').val());
		if (num1 > 0) {
			$('input:text.count-1').val(num1 - 1);
			$.session.set("product1", num1 - 1);
		}
		if (num1 == 1) {
			$('.button-count-1:first-child').prop('disabled', true);
			if((num3 == 0) && (num2 == 0)){
				$("#footer-btn").slideUp(100);
			}
		}
	});

	$('.button-count-1:last-child').click(function(){
		num1 = parseInt($('input:text.count-1').val());
		num2 = parseInt($('input:text.count-2').val());
		num3 = parseInt($('input:text.count-3').val());
		if (num1 < 20) {
			$('input:text.count-1').val(num1 + 1);
			$.session.set("product1", num1 + 1);
		}
		if (num1 > -1) {
			$('.button-count-1:first-child').prop('disabled', false);
			$("#footer-btn").slideDown(100);
		}
	});

	$('.button-count-2:first-child').click(function(){
		num1 = parseInt($('input:text.count-1').val());
		num2 = parseInt($('input:text.count-2').val());
		num3 = parseInt($('input:text.count-3').val());
		if (num2 > 0) {
			$('input:text.count-2').val(num2 - 1);
			$.session.set("product2", num2 - 1);
		}
		if (num2 == 1) {
			$('.button-count-2:first-child').prop('disabled', true);
			if((num3 == 0) && (num1 == 0)){
				$("#footer-btn").slideUp(100);
			}
		}
	});

	$('.button-count-2:last-child').click(function(){
		num1 = parseInt($('input:text.count-1').val());
		num2 = parseInt($('input:text.count-2').val());
		num3 = parseInt($('input:text.count-3').val());
		if (num2 < 20) {
			$('input:text.count-2').val(num2 + 1);
			$.session.set("product2", num2 + 1);
		}
		if (num2 > -1) {
			$('.button-count-2:first-child').prop('disabled', false);
			$("#footer-btn").slideDown(100);
		}
	});

	$('.button-count-3:first-child').click(function(){
		num1 = parseInt($('input:text.count-1').val());
		num2 = parseInt($('input:text.count-2').val());
		num3 = parseInt($('input:text.count-3').val());
		if (num3 > 0) {
			$('input:text.count-3').val(num3 - 1);
			$.session.set("product3", num3 - 1);
		}
		if (num3 == 1) {
			$('.button-count-3:first-child').prop('disabled', true);
			if((num2 == 0) && (num1 == 0)){
				$("#footer-btn").slideUp(100);
			}
		}
	});

	$('.button-count-3:last-child').click(function(){
		num1 = parseInt($('input:text.count-1').val());
		num2 = parseInt($('input:text.count-2').val());
		num3 = parseInt($('input:text.count-3').val());
		if (num3 < 20) {
			$('input:text.count-3').val(num3 + 1);
			$.session.set("product3", num3 + 1);
		}
		if (num3 > -1) {
			$('.button-count-3:first-child').prop('disabled', false);
			$("#footer-btn").slideDown(100);
		}
	});

	$('.bill').click(function(){
		window.location.href='./bill.html';
	 })
