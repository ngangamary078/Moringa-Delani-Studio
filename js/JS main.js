$("document").ready(function(){
    $(".images").hover(function(e){
        const target= e.target;
        if(target.matches("images")){
            const titlename =target.alt.toUpperCase();
            $(target).prop("title",titlename);
        }
    })
});