const mainSquare = document.createElement("nav");
mainSquare.classList.add('navbar','navbar-expand-lg','navbarStyle');
mainSquare.innerHTML = ` <div class="container-fluid">
<span></span>
<button class="navbar-toggler navbarbuttonStyle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link link" aria-current="page" href="./menu">Menu</a>
        </li>
        <li class="nav-item py-1 col-12 col-lg-auto">
            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr class="d-lg-none e">
        </li>
        <li class="nav-item">
            <a class="nav-link link" aria-current="page" href="./galery">Galery</a>
        </li>
        <li class="nav-item py-1 col-12 col-lg-auto">
            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr class="d-lg-none e">
        </li>
        <li class="nav-item">
            <a class="nav-link link" aria-current="page" href="./info">Information</a>
        </li>
    </ul>
</div>
</div>`
document.getElementById("body").appendChild(mainSquare);