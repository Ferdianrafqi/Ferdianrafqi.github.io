$(document).ready(function(){
    $("#cc850").mouseenter(function(){
        $(".p-2").slideUp()
        $(".p-3").slideUp()
        $(".p-1").slidedown()
        $(".ESS-1").attr("src", "img/jeskojs.png")
        
    })
    $("h2").mouseenter(function(){
        $(".p-2").slideUp()
        $(".p-3").slideUp()
        $(".p-1").slidedown()
        $(".ESS-1").attr("src", "img/jeskojs.png")
        
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
        $(".ESS-1").attr("src", "img/jeskojs2.jpg")
        
    })
    $(".btn-3").click(function(){
        $(".ESS-1").attr("src", "img/jeskojs3.jpg")
    })
    $(".btn-1").click(function(){
        $(".ESS-1").attr("src", "img/jeskojs.png")
    })

   

    
})