<div class="center_controller">
    <slot />
</div>

<style lang="scss">
    @use "style" as *;

    .center_controller {
        margin: 100px 15vw;
        min-height: 45vh;
    }

    .center_controller :global(hr) {
        color: $accent_red;
        display: inline-block;
        width: 20%;
        max-width: 150px;
    }

    .center_controller :global(h1) {
        margin-bottom: 70px;
        color: $darker_blue;
        font-size: 3rem;
        font-family: "Open Sans", sans-serif;
    }

    .center_controller :global(h2) {
        margin-top: 0;
        margin-bottom: 30px;
        color: $darker_blue;
        text-align: left;
        font-size: 2rem;
        font-family: "Open Sans", sans-serif;
    }

    .center_controller :global(p) {
        font-family: "Open Sans", sans-serif;
        color: hsl(0, 0%, 30%);
        font-weight: 400;
    }

    .center_controller :global(.textbox) {
        display: flex;
        justify-content: space-between;
    }

    .center_controller :global(.text) {
        text-align: justify;
        width: 60%;
        height: 100%;
    }

    .center_controller :global(.supplementImg) {
        justify-self: flex-end;
        width: 30%;
    }

    .center_controller :global(.photos) {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 50px;
    }

    .center_controller :global(.photo) {
        border-radius: 15px;
        max-height: 250px;
    }

    .center_controller :global(.linkers) {
        margin-bottom: 50px;
    }

    .center_controller :global(.linkage) {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .center_controller :global(.links) {
        font-size: 1.1rem;
        color: $main_blue;
        display: inline;
        width: auto;
        margin-bottom: 5px;
    }

    @media only screen and (max-width: 520px) {
        .center_controller {
            margin: 40px 6vw;
        }

        .center_controller :global(.textbox img) {
            display: none;
        }

        .center_controller :global(.photo) {
            max-height: auto;
            max-width: 80vw;
        }

        .center_controller :global(.text) {
            width: 100%;
            font-size: 0.9rem;
            text-align: left;
        }

        .center_controller :global(.text h2),
        .center_controller :global(.linkers h2) {
            font-size: 1.5rem;
        }

        .center_controller :global(h1) {
            font-size: 1.6rem;
            margin-bottom: 20px;
        }

        .center_controller :global(.links) {
            font-size: 0.8rem;
            margin-bottom: 15px;
        }
    }
</style>
