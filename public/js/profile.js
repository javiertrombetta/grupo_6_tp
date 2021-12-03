window.addEventListener('load', function(){
    let profile = document.querySelector('.profile a');
    let profileHidden = document.querySelector('.profile-section');
    let burger_menu = document.querySelector(".fa.fa-bars.burger")
    let hidden_menu = document.querySelector(".header-bottom-bar")

    burger_menu.addEventListener("click",function(e){
        hidden_menu.style.display = "block";
    })
    if (profile) {
        profile.addEventListener('click',function(event){
            profileHidden.style.display = 'block';
            event.preventDefault();
        })  
    }

})