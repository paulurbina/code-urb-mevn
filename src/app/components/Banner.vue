<template>
    <div>
         <header id="header" class="">
            <div class="container-fluid">
                <div class="row position-relative text-center">
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

@media all and (max-width: 500px) {
    #style-banner {
        width: 100%;
        height: 400px;
        overflow: hidden;
    }
    #header .texto-banner {
        font-size: 20px;
    }
}
#header .texto-banner {
	font-size: 50px;
	bottom: 90px;
	right: 90px;
	color: #fff;
}
</style>
