<template>
<!--  <footer class="mt-5 bg-dark text-white p-5">-->
<!--    &copy; Yirsis Serrano - {{ currentYear }}-->
<!--  </footer>-->
    <footer>
        <div class="footer-content">
<!--            <div class="contact-info">-->
<!--                <h4>Contacto</h4>-->
<!--                <p>Calle Falsa 123, Ciudad X</p>-->
<!--                <p>Correo: ejemplo@correo.com</p>-->
<!--                <p>Teléfono: +1 123 456 7890</p>-->
<!--            </div>-->
<!--            <div class="navigation-links">-->
<!--                <h4>Navegación</h4>-->
<!--                <ul>-->
<!--                    <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>-->
<!--                    <li><a href="/contacto">Contacto</a></li>-->
<!--                    &lt;!&ndash; incluir más enlaces según sea necesario! &ndash;&gt;-->
<!--                </ul>-->
<!--            </div>-->
<!--            <div class="social-links">-->
<!--                <h4>Redes Sociales</h4>-->
<!--                <a href="#">Facebook</a>-->
<!--                <a href="#">Twitter</a>-->
<!--                <a href="#">Instagram</a>-->
<!--                &lt;!&ndash; incluir más enlaces de redes sociales según sea necesario! &ndash;&gt;-->
<!--            </div>-->
        </div>
        <div class="copyright-info">
            <p>© 2024 mv.es | Todos los derechos reservados</p>
        </div>
    </footer>
</template>

<script setup>
const currentYear = new Date().getUTCFullYear();
</script>

<style scoped lang="scss">
//footer {
//  background: var(--resaltado-3);
//  height: 15rem;
//  margin-top: 5rem;
//}

footer {
    background: var(--resaltado-3);
    color: #fff;
    padding: 50px 0;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
}

.footer-content h4 {
    margin-bottom: 20px;
}

.footer-content a {
    color: #fff;
    text-decoration: none;
}

.copyright-info {
    font-size: 14px;
}
</style>
