<script>
    export let marginalTop = "100px";
    import {showModal} from "../stores/cookie-consent";

    function openModal() {
        $showModal = true;
    }
</script>

<div id="iframe_rep" style="margin-top: {marginalTop};" title="empty">
    <span>Изключили сте бисквитките за карта. Може да ги включите обратно <button type="button" class="link-btn" on:click={openModal}>тук</button></span>
    <p>Адрес на фирмата: Бургас, ж.к. Зорница, Затворен комплекс "Перла", Бл. 1, вх. 1, партер</p>
    <p>Вместо да включвате картата може да отворите този линк тук:</p> <a target="about:blank" href="https://g.page/CardiologicalCenter?share"><button>Към Карта (извън страницата)</button></a>
</div>


<style lang="scss">
    @use "style" as *;

    #iframe_rep {
        width: 100vw;
        height: 40vh;
        background-color: whitesmoke;
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        color: $gray;
        font-size: 0.9rem;
        span {
            margin: 0 10px;
        }
        p {
            margin: 5px 10px;
        }

        .link-btn {
            background: none;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            color: $accent_red;
            text-decoration: underline;
        }
    }

    button {
        padding: 10px;
        border: none;
        background-color: $soft_button_hover_light;
        color: $soft_text_white;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
    }
</style>