$(document).ready(function(){
    $("#cc850").mouseenter(function(){
        $(".p-2").slideUp()
        $(".p-3").slideUp()
        $(".p-1").slideDown()
        $(".ESS-1").attr("src", "img/ESS_img1.jpg")

        
    })
    $("h2").mouseenter(function(){
        $(".p-2").slideUp()
        $(".p-3").slideUp()
        $(".p-1").slidedown()
        $(".ESS-1").attr("src", "img/ratio_img1.jpg")
        
    })
    $(".btn-1").click(function(){ 
        $(".p-1").slideToggle("slow")
        $(".p-2").slideUp("slow")
        $(".p-3").slideUp("slow")
        
    })
    $(".btn-2").click(function(){ 
        $(".p-2").slideToggle("slow")
        $(".p-1").slideUp("slow")
        $(".p-3").slideUp("slow")
        
    })
    $(".btn-3").click(function(){ 
        $(".p-3").slideToggle("slow")
        $(".p-2").slideUp("slow")
        $(".p-1").slideUp("slow")
        
    })
    $(".btn-2").click(function(){
        $(".ESS-1").attr("src", "img/ratio_img1.jpg")
        
    })
    $(".btn-3").click(function(){
        $(".ESS-1").attr("src", "img/interior1.jpg")
    })
    $(".btn-1").click(function(){
        $(".ESS-1").attr("src", "img/ESS_img1.jpg")
    })

   

    
})