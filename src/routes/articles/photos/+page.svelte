<script>
    import Article from "../../../lib/Article.svelte";

    const items = [{
        type: 'photos',
        heading: 'Снимки',
        paragraph: ' ',
        sources: ['/clin1.png', '/clin2.png', '/clin3.png', '/clin11.png', '/clin5.png', '/clin6.png', '/clin7.png', '/clin8.png', '/clin9.png', '/clin10.png', '/clin4.png', '/clin12.png', '/clin13.png', '/clin14.png', '/clin15.png', '/clin16.png', '/clin17.png', '/clin18.png', '/clin19.png', '/clin20.png', '/clin21.png']
    }];
</script>

<Article {items} />
