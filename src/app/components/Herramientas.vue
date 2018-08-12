<template>
    <div>
        <section id="herramientas">
            <div class="contenedor-herramientas">
                <div class="titulo-herramientas">
                    <h3>INNOVAMOS E UTILIZAMOS HERRAMIENTAS DE ÚLTIMA GENERACIÓN</h3>
                </div>
                <div class="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <img src="/assets/iconos-herramientas/item-icono-1.png" alt="" />
                        </div>
                        <div class="slide">
                            <img src="/assets/iconos-herramientas/item-icono-2.png" alt="" />
                        </div>
                        <div class="slide">
                            <img src="/assets/iconos-herramientas/item-icono-3.png" alt="" />
                        </div>
                        <div class="slide">
                            <img src="/assets/iconos-herramientas/item-icono-4.png" alt="" />
                        </div>
                        <div class="slide">
                            <img src="/assets/iconos-herramientas/item-icono-5.png" alt="" />
                        </div>
                        <div class="slide">
                            <img src="/assets/iconos-herramientas/item-icono-6.png" alt="" />
                        </div>
                        <div class="slide">
                            <img src="/assets/iconos-herramientas/item-icono-7.png" alt="" />
                        </div>
                        <div class="slide">
                            <img src="/assets/iconos-herramientas/item-icono-8.png" alt="" />
                        </div>
                    </div>
            </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@media screen {
    .contenedor-herramientas {
        margin-top: 70px;
        margin-bottom: 70px;
        height: 180px;
    }
    .titulo-herramientas h3 {
        color: #3A3A3A;
        font-family: 'BebasNeue Regular','Courier New', Courier, monospace;
        justify-content: center;
        text-align: center;
        margin: 20px;
        font-size: 40px;
        font-weight: bold;
    }
    img {
        width: 100px;
        height: 100px;
    }
    @keyframes scroll {
	0% {
	  transform: translateX(0);
	}
	100% {
	  transform: translateX(calc(-250px * 7));
	}
}
.slider {
	background: white;
	/* box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125); */
	height: 100px;
	margin-top: 30px;
    margin-bottom: 30px;
    padding: auto;
	overflow: hidden;
	position: relative;
	width: 100%;
  }
  .slider::before, .slider::after {
	background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
	content: "";
	height: 100px;
	position: absolute;
	width: 250px;
	z-index: 2;
  }
  .slider::after {
	right: 0;
	top: 0;
	transform: rotateZ(180deg);
  }
  .slider::before {
	left: 0;
	top: 0;
  }
  .slider .slide-track {
	animation: scroll 40s linear infinite;
	display: flex;
	width: calc(250px * 14);
  }
  .slider .slide {
	height: 100px;
	width: 250px;
  }
}
@media screen and (max-width: 750px){
    .slider {
        margin: auto;
    }
   .slider::before, .slider::after {
       background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 0%);
       content: "";
   }
   .slider .slide-track {
	animation: scroll 20s linear infinite;
  }
}
</style>
