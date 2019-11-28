module.exports = {
    title: 'Lightning Talks 2019',
    description: 'Just playing around',
    themeConfig: {
        logo: '/logo.svg',
        sidebar: [
            '/some-more.md',
            '/folder/third-file.md',
            '/converting-numbers.md',
            '/frontmatter-demo.md'
        ],
        nav: [
            { text: 'Google', link: 'https://google.com' }
        ],

        // Github Repository
        repo: 'cosee/lightning-2019-vuepress'

    },
    // Configuration for github-pages deployment
    base: process.env.BASE_URL || '',
    dest: 'docs'
};

