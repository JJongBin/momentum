const logout = document.querySelector("#logout");



logout.addEventListener("click", function() {
    const checkJogout = confirm("Do you want to logout?");
    if(checkJogout === true){
        localStorage.removeItem('username');
        localStorage.removeItem('todos');
        location.reload();
    }
})