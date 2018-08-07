<template>
    <div>
        <section id="servicios">
            <div class="container">
                <div class="row">
                    <div class="servicios-titulo">
                        <h3 class="display-2">Servicios</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="grid-container">
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-1.png" alt="Diseño y desarrollo web" class="">
                        </div>
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-2.png" alt="Posicionamiento web" class="">
                        </div>
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-3.png" alt="Market virtual" class="">
                        </div>
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-4.png" alt="Videos institucionales" class="">
                        </div>
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-5.png" alt="Fotografía digital" class="">
                        </div>
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-6.png" alt="Animación de videos" class="">
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    </div>    
</template>


<style scoped>
@media screen {
    .servicios-titulo {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #3A3A3A;
        font-family: BebasNeue Regular, Arial, Helvetica, sans-serif;
    }
   .grid-container {
       display: grid;
       grid-template-columns: repeat(3,1fr);
   }
   .grid-item img {
       max-width: 100%;
   }
}
@media screen and (max-width: 750px) {
    .grid-container {
        grid-template-columns: repeat(2,1fr);
    }
}
/* @media screen and (max-width: 419px) {
    .grid-container {
        grid-template-columns: repeat(2,1fr);
    }
} */
</style>
