window.addEventListener('load', function(){
    let profile = document.querySelector('.profile a');
    let profileHidden = document.querySelector('.profile-section');

    profile.addEventListener('click',function(event){
        console.log("hiciste click!!!");
        event.preventDefault();
    })

})