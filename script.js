$(document).ready(function(){
    $("input[name='phone']").mask("+7 (999) 999-99-99");
    $(".button_close_window").click(()=>{
        $('.modal_window').removeClass('modal_window_active');
    });

    var windowHeight = $(window).height();
    var year = parseInt($("#year").text());
    var deal = parseInt($("#deal").text());
    var money = parseInt($("#money").text());
    var cv = false;
    $("#year, #deal, #money").text('0');
 
	$(document).on('scroll', function() {
		$('.who_statistics').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
                let yearCount = 0;
                let dealCount = 0;
                let moneyCount = 0;

                if(cv == false){
                    setInterval(function(){
                        if(yearCount<year){
                            yearCount++;
                            $("#year").text(yearCount); 
                            cv = true;
                        }
                        if(dealCount<deal){
                            dealCount+=5;
                            $("#deal").text(dealCount); 
                        }  
                        if(moneyCount<money){
                            moneyCount+=10;
                            $("#money").text(moneyCount); 
                        }                  
                    }, 5);
                } 
			}
		});
    });
    
    setInterval(function(){
		if ($(".slider_header h3:last-child").hasClass("choosen")) {
			$(".slider_header h3")
				.eq(0)
				.addClass("choosen")
				.siblings()
				.removeClass("choosen");
		} else {
			$(".choosen").removeClass("choosen").next().addClass("choosen");
		}
		$(".slide")
			.eq($(".choosen").index())
			.addClass("active")
			.siblings()
            .removeClass("active");
       
	}, 5000);
});