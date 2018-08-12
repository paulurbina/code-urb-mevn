<template>
    <div>
        <section id="contactanos">
            <div class="container">
                <div class="row contenedor-titulo">
                   <div class="col-md-12">
                        <div class="titulo-contactanos">
                            <h3>CONTÁCTANOS</h3>
                        </div>
                   </div>
                </div>
                <form action="">
                    <div class="row datos-usuarios">
                        <div class="col-md-6 col-sm-6 col-xs-6 date-left">
                            <div class="form-group">
                                <label for="">Nombre</label>
                                <input type="text" class="form-control">
                                <br>
                                <label for="">Apellido</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-xs-6">
                                    <div class="form-group">
                                        <label for="">Teléfono</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6 col-xs-6">
                                    <div class="form-group">
                                        <label for="">Email</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6 date-right">
                            <div class="form-group">
                                <label for="">Observaciones / Comentarios</label>
                                <textarea class="form-control" rows="6"></textarea>
                            </div>
                            <button class="btn btn-primary float-right boton-enviar">Enviar</button>
                        </div>
                        </div>
                    </form>
            </div>
        </section>
    </div>
</template>
<style scoped>
@media screen {
    .contenedor-titulo h3 {
        justify-content: center;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        height: 90px;
        font-size: 50px;
        color: #3a3a3a;
        font-family: BebasNeue Regular, 'Courier New', Courier, monospace;
        font-weight: bold;
    }
    .datos-usuarios label {
        font-size: 22px;
        font-family: 'NewGotLt', 'Courier New', Courier, monospace;
        color: #3a3a3a;

    }
    .datos-usuarios input:hover,textarea:hover {
        border-color: #447FC6;
    }
    .date-right .boton-enviar {
        font-size: 24px;
        font-family: 'MyriadPro-Regular','Courier New', Courier, monospace;
        border-radius: 15px;
        background-color: #447FC6;
    }
}
@media screen and (max-width: 750px) and (min-width: 401px) {
    .date-right {
        margin-top: 0;
        padding-top: 0;
    }
}

@media screen and (max-width: 400px) {
    .contenedor-titulo h3 {
        font-size: 35px;
    }
}
</style>
