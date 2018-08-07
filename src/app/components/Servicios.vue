<template>
    <div>
        <section id="servicios">
            <div class="container">
                <div class="row">
                    <div class="servicios-titulo">
                        <h3 class="display-4">Servicios</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="grid-container">
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-1.png" alt="" class="">
                        </div>
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-2.png" alt="" class="">
                        </div>
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-3.png" alt="" class="">
                        </div>
                        <!-- <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-4.png" alt="" class="">
                        </div>
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-5.png" alt="" class="">
                        </div>
                        <div class="grid-item">
                            <img src="/assets/assets-servicios/Fondo-6.png" alt="" class="">
                        </div> -->
                    </div>
                </div>   
            </div>
        </section>
    </div>    
</template>


<style scoped>
@media screen {
   .grid-container {
       display: grid;
       grid-template-columns: repeat(auto-fill, 400px);
       justify-content: center;
   }
   .grid-item img {
       max-width: 100%;
   }
}
@media screen and (max-width: 750px) and (min-width: 420px) {
   
}
@media screen and (max-width: 419px) {

}
</style>
