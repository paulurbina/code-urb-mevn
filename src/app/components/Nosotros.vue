<template>
    <div>
        <section id="nosotros">
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-md-6 col-xs-6">
                        <div class="nosotros-content-left">
                            <img class="img-fluid" src="/assets/nosotros-section.png" width="100%;" alt="">
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-6">
                        <div class="nosotros-content-right middle-xs">
                                <h2 class="nosotros-titulo">EN SYSTEMS URB</h2>
                                <P class="nosotros-description">
                                Te damos el mejor servicio web <br> de calidad para aumentar la rentabilidad <br> y posicionamiento
                            </P>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
@media screen {
   .nosotros-content-right {
       font-size: 30px;
       font-family: NewsGothicLightBT;
       color: #3A3A3A;
       padding-top: 90px;
       padding-bottom: 90px;
   }
}

@media screen and (max-width: 750px) and (min-width: 420px) {
    .nosotros-titulo {
        font-size: 30px;
        text-align: center;
    }
    .nosotros-description {
        text-align: center;
    }
}
@media screen and (max-width: 419px) {
    h2.nosotros-titulo {
        font-size: 25px;
        text-align: center;
    }
    .nosotros-description {
        font-size: 23px;
        text-align: center;
        padding-top: -40px;
    }
}
</style>
