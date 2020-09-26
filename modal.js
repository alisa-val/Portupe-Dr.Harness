function show() {
    var modal = document.getElementById('myModal');
    var cansel = document.getElementsByClassName('close')[0]
        modal.style.display = "flex";
        cansel.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
           if (event.target == modal) {
               modal.style.display = "none";
            }
        }
}

