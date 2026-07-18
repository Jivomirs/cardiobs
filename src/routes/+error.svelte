<script>
    import { page } from '$app/state';
</script>

<div class="error">
    <h2>Опа</h2>
    <p>Такава страница не същестува</p>
    <a href="/">Към началото</a>
    <p>{page.error?.message}</p>
</div>

<style lang="scss">
    .error {
        text-align: center;
        margin-bottom: 460px;
    }
</style>