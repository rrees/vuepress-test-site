module.exports = {
    title: "My First VuePress site",
    description: "A VuePress experiment",
    evergreen: true,
    themeConfig: {
        docsDir: 'docs',
        nav: [
            {
                text: 'About',
                link: '/about'
            }
        ],
        search: false,
    }
}