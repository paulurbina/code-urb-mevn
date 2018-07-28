<template>
    <div>
         <header id="header" class="">
            <div class="container-fluid">
                <div class="row style-banner-principal">
                    <img id="style-banner" class="img-fluid" src="/assets/banner-principal.jpg">
                    <p class="texto-banner position-absolute">
                        Diseñamos tu sitio web<br>
                        con un enfoque diferente
                    </p>
                </div>
            </div>
         </header>
    </div>
</template>

<style>
#style-banner {
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover; 
	background-color: #898989;
	width: 100%;
	height: 610px;
}

@media screen and (max-width: 700px) and (min-width: 401px) {
    
}

@media screen and (max-width: 420px) {
    body {
        overflow: hidden;
    }
    #style-banner {
        width: 100%;
        height: 400px;
    }
    .texto-banner {
        font-size: 25px;
        right: 25%;
        top: 35%;
        color: #ffffff;
    }
}

</style>
