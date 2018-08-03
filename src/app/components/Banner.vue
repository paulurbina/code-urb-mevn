<template>
    <div>
         <header id="header">
            <div class="container-fluid">
                <div class="row style-banner-principal position-relative">
                    <img id="style-banner" class="img-fluid" src="/assets/banner-principal.jpg">
                    <p class="texto-banner position-absolute font-weight-bold">
                        Diseñamos tu sitio web<br>
                        con un enfoque diferente
                    </p>
                </div>
            </div>
         </header>
    </div>
</template>

<style scoped>
@media screen {
    #style-banner {
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover; 
	background-color: #898989;
	width: 100%;
	height: 610px;
}
#header .texto-banner {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    color: #ffffff;
    text-align: center;
    text-shadow: 4px 4px 5px #000000;
    letter-spacing: 1px;
    font-family: BebasNeue Regular;
}
}


@media screen and (max-width: 750px) and (min-width: 401px) {
    #header .texto-banner {
        font-size: 30px;
    }
}

@media screen and (max-width: 400px) {
    #style-banner {
        width: 100%;
        height: 400px;
    }
    #header .texto-banner {
        font-size: 25px;
    }
}

</style>
