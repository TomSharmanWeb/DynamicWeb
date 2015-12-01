$(document).ready(function(){
    
    // hide shadow blocks
    $("#contshdow").hide()
    $("#contShdw2").hide()
    $("#contShdw2-2").hide()
    $("#contShdw2-3").hide()
    $("#contShdw2-4").hide()
    
    // TweenMax Animation 
    
    //        Fade in for Christmas text
    
        
                
    var reverseXmasText =     TweenMax.to(document.getElementById("xmasText"), 5, {ease:Cubic.easeOut, opacity:0, delay:2}) 
    
    reverseXmasText.reverse(0);
    
    // creating a varibale to get id 
    //var cont1 = document.getElementById("cont1");
    var revesreCout1 = TweenMax.to(document.getElementById("cont1"), 1.2, {scale:0.2, opacity:0, ease:Cubic.easeOut})
    
    revesreCout1.reverse(0);
    
    
    
  
    
    
    
    
    
// On click for for block 1    

    $("#cont1").click(function(){
        
        $("#contshdow").show()
        $("#cont1").hide()
        $("#cont2-1").fadeIn(0400)
        $("#cont2-2").fadeIn(0400)
        $("#cont2-3").fadeIn(0400)
        $("#cont2-4").fadeIn(0400)
       

                
//                TweenMax annimation to  white balls
                TweenMax.to(document.getElementById("contShd1"), 0.6, {ease:Cubic.easeOut, x:-100, y:-100, scale:0.5 })        
        
        TweenMax.to(document.getElementById("contShd2"), 0.6, {ease:Cubic.easeOut, x:132, y:-127, scale:0.5 })
        
        TweenMax.to(document.getElementById("contShd3"), 0.6, {ease:Cubic.easeOut, x:-123, y:127, scale:0.5 })
        
        TweenMax.to(document.getElementById("contShd4"), 0.6, {ease:Cubic.easeOut, x:132, y:127, scale:0.5 }) 
    
    
    })
 
// On click for for block 4 and block 16     
    
    //block top left
    $("#cont2-1").click(function() {
        $(this).remove();
        $(".cont2-1").show() 
        $("#contShd1").hide()
        $("#contShdw2").show()
         TweenMax.to(document.getElementById("contShdw2-1-1"), 0.6, {ease:Cubic.easeOut, x:65, y:-70, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-1-2"), 0.6, {ease:Cubic.easeOut, x:-65, y:-70, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-1-3"), 0.6, {ease:Cubic.easeOut, x:-65, y:58, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-1-4"), 0.6, {ease:Cubic.easeOut, x:65, y:58, scale:0.5 })
    })
    //block top right
    $("#cont2-2").click(function() {
        $(this).remove();  
        $(".cont2-2").show()
        $("#contShd2").hide()
        $("#contShdw2-2").show()
        TweenMax.to(document.getElementById("contShdw2-2-1"), 0.6, {ease:Cubic.easeOut, x:-57, y:-69, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-2-2"), 0.6, {ease:Cubic.easeOut, x:74, y:-70, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-2-3"), 0.6, {ease:Cubic.easeOut, x:-57, y:58, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-2-4"), 0.6, {ease:Cubic.easeOut, x:73, y:58, scale:0.5 })
    }) 
    
    //block bottom left
    $("#cont2-3").click(function() {
        $(this).remove();  
        $(".cont2-3").show() 
        $("#contShd3").hide()
        $("#contShdw2-3").show()
        TweenMax.to(document.getElementById("contShdw2-3-1"), 0.6, {ease:Cubic.easeOut, x:-62, y:-60, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-3-2"), 0.6, {ease:Cubic.easeOut, x:67, y:-58, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-3-3"), 0.6, {ease:Cubic.easeOut, x:-62, y:70, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-3-4"), 0.6, {ease:Cubic.easeOut, x:67, y:68, scale:0.5 })
        
    }) 
    
    //block bottom right
    $("#cont2-4").click(function() {
        $(this).remove();  
        $(".cont2-4").show()
        $("#contShd4").hide()
        $("#contShdw2-4").show()
          TweenMax.to(document.getElementById("contShdw2-4-1"), 0.6, {ease:Cubic.easeOut, x:-56, y:-60, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-4-2"), 0.6, {ease:Cubic.easeOut, x:74, y:-58, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-4-3"), 0.6, {ease:Cubic.easeOut, x:-56, y:70, scale:0.5 })
         TweenMax.to(document.getElementById("contShdw2-4-4"), 0.6, {ease:Cubic.easeOut, x:74, y:68, scale:0.5 })
    })   

})