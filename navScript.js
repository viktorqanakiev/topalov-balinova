$("#menu-toggle").on("click", function(e){
    e.preventDefault();
});
$("#menu-toggle").click(func1)

function func1(e){
    $("#sidebar-wrapper").toggleClass("block")
    $("#menu-toggle").toggleClass("none")
    $("#side-nav").toggleClass("col-3")
    $(".sideDiv").toggleClass("col-9")
    $("#side-nav").toggleClass("col-2")
    $(".sideDiv").toggleClass("col-10")
    $(".resp").toggleClass("col-8")
    $(".resp").toggleClass("col-9")
    $("#nav-logo-container").toggleClass("biggerLogo")
    if($("#sidebar-wrapper"). hasClass("block")){
        $(".sideDiv").toggleClass("clickable")
    }
    else{
        $(".sideDiv").toggleClass("clickable")
    }
    
}

$(".sideDiv").on("click", ()=> {
    if($(".sideDiv"). hasClass("clickable")){
        func1()
    }
})