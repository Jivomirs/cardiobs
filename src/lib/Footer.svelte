<script>
    export let phone;

    import {showModal} from "../stores/cookie-consent";

    function showIt() {
        $showModal = true;
    }
</script>

    <footer>
        <div id="contact">
            <p><strong>Контакти</strong></p>
            <span>Телефон: {phone}</span> 
            <span>Имейл: cardiocenterbs@gmail.com</span>
        </div>
        <div id="links">
            <p><strong>Връзки</strong></p>
            <a href="/" style="margin-top: 0px;">Начало</a> <br>
            <a href="/offers">Дейности</a><br>
            <a href="/about">За Нас</a>
        </div>
        <div id="additional_info">
            <p><strong>Допълнителна инфромация</strong></p>
            <span on:click={showIt}>Настройки за бисквитки</span>
            <a href="/articles/privacy.svelte">Поверителност на данните</a><br>
        </div>
        <div id="madeby">
            <p>Copyright &copy;2022 cardio-bs. Made with &hearts; by Zakrok09.</p>
        </div>
    </footer>

<style lang="scss">
    @import "../style.scss";
    
    footer {
        @include nomargpad();
        background-color: $bg_black;
        color: $soft_text_white;
        font-family: "Open Sans", sans-serif;
        margin-top: -10px;
        display: grid;
        padding: 0 15vw;
        grid-template: 200px 50px / 1fr 1fr 2fr;
    }

    a {
        @include noanchor();
        color: $soft_text_white;
        display: inline-block;
        margin-top: 10px;
        margin-bottom: 0px;
    }

    span {
        display: block;
        margin-top: 10px;
        cursor: pointer;
    }

    #contact {
        grid-area: 1 / 1 / span 1 / span 1;
        padding: 20px 30px;
    }

    #links {
        grid-area: 1 / 2 / span 1 / span 1;
        padding: 20px 30px;
    }

    #additional_info {
        grid-area: 1 / 3 / span 1 / span 1;
        padding: 20px 30px;
    }
    
    #madeby {
        grid-area: 2 / 1 / span 1 / span 3;
        @include smalltext();
        font-family: monospace;
        text-align: center;
        font-weight: bold;
        color: hsl(0, 0%, 40%);
    }

    @media only screen and (max-width: 1000px) {
        footer {
            padding: 0px;
        }
    }

    @media only screen and (max-width: 740px) {
        footer {
           grid-template: 200px 200px 50px / 1fr 1fr;
        }

        #contact {
            grid-area: 1 / 1 / span 1 / span 1;
        }

        #links {
            grid-area: 1 / 2 / span 1 / span 1;
        }

        #additional_info {
            grid-area: 2 / 1 / span 1 / span 2;
        }

        #madeby {
            grid-area: 3 / 1 / span 1 / span 2;
        }
    }

    @media only screen and (max-width: 400px) {
        footer {
           grid-template: 200px 200px 200px 50px / 1fr;
        }

        #contact {
            grid-area: 1 / 1 / span 1 / span 1;
        }

        #links {
            grid-area: 2 / 1 / span 1 / span 1;
        }

        #additional_info {
            grid-area: 3 / 1 / span 1 / span 2;
        }

        #madeby {
            grid-area: 4 / 1 / span 1 / span 2;
            font-size: 10px;
        }
    }

    @media only screen and (max-width: 275px) {
        footer {
           grid-template: 200px 200px 200px 50px / 1fr;
           #contact #additional_info #links {
               margin: 30px 0px;
           }
        }
    }
</style>