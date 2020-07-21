var localStorage = window.localStorage;

$(function(){
    if (localStorage.getItem('loggedIn') == "true"){
        $("#toolbar").load("./toolbarDemo.html");
    }else{
        $("#toolbar").load("./toolbar.html");
    }
    $("footer").load("./footer.html");
});
