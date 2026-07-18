<script>
    export let items = [];
</script>

<div class="center_controller">
    {#each items as item}
        {#if item.type === 'text'}
            <div class="textbox">
                <div class="text">
                    <hr>
                    <h2>{item.heading}</h2>
                    {#each item.paragraphs as paragraph}
                        <p>{paragraph}</p>
                    {/each}
                </div>
                {#if item.supplementPhoto !== ' '}
                    <img class="supplementImg" src={item.supplementPhoto} alt="Не важна нимка изобразяваща нещо свързано с текста">
                {/if}
            </div>
        {:else if item.type === "photos"}
            <div class="photobox">
                <hr>
                <h2>{item.heading}</h2>
                <p>{item.paragraph}</p>
                <div class="photos">
                    {#each item.sources as src}
                        <img class="photo" src={src} alt="">
                    {/each}
                </div>
            </div>
        {:else if item.type === "error"}
            <div class="err">
                <h2>{item.heading}</h2>
                <img src="/404.png" alt="">
                <a href="/">{item.paragraph}</a>
            </div>
        {:else if item.type === "heading"}
            <h1>{item.heading}</h1>
        {:else if item.type === "links"}
            <div class="linkers">
                <hr>
                <h2>{item.heading}</h2>
                <div class="linkage">
                    {#each item.links as link}
                        <a class="links" target="_blank" href={link.href}>{link.text}</a>
                    {/each}
                </div>
            </div>
        {/if}
    {/each}
</div>

<style lang="scss">
    @use "style" as *;
    .center_controller {
        margin: 100px 15vw;
        min-height: 45vh;
    }

    hr {
        color: $accent_red;
        display: inline-block;

        width: 20%;
        max-width: 150px;
    }

    .links {
        font-size: 1.1rem;
        color: $main_blue;
        display: inline;
        width: auto;
        margin-bottom: 5px;
    }

    .linkers {
        margin-bottom: 50px;
    }

    .linkage {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    p {
        font-family: "Open Sans", sans-serif;
        color: hsl(0, 0%, 30%);
        font-weight: 400;
    }

    h1 {
        margin-bottom: 70px;
        color: $darker_blue;
        font-size: 3rem;
        font-family: "Open Sans", sans-serif;
    }

    h2 {
        margin-top: 0px;
        margin-bottom: 30px;
        color: $darker_blue;
        text-align: left;
        font-size: 2rem;
        font-family: "Open Sans", sans-serif;
    }

    .text {
        text-align: justify;
        width: 60%;
        height: 100%;
    }

    .textbox {
        display: flex;
        justify-content: space-between;
    }

    .supplementImg {
        justify-self: flex-end;
        width: 30%;
    }

    .photos {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 50px;
    }

    .photo {
        border-radius: 15px;
        max-height: 250px;
    }

    .err {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            display: block;
            width: 300px;
        }

        h2 {
            color: $soft_button;
        }
    }

    @media only screen and (max-width: 520px) {
        .textbox {
            img {
                display: none;
            }
        }

        .photo {
            max-height: auto;
            max-width: 80vw;
        }

        .text {
            width: 100%;
            font-size: 0.9rem;
            text-align: left;

            h2 {
                font-size: 1.5rem;
            }
        }

        .linkers {
            h2 {
                font-size: 1.5rem;
            }
        }

        h1 {
            font-size: 1.6rem;
            margin-bottom: 20px;
        }

        .links {
            font-size: 0.8rem;
            margin-bottom: 15px;
        }

        .center_controller {
            margin: 40px 6vw;
        }
    }
</style>
