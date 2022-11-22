import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Devibe Documents',
  titleTemplate: 'doc.devibe.cn',
  description: 'Doc site for devibe.cn.',
  cleanUrls: 'with-subfolders',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  // Theme related configurations.
  themeConfig: {
    siteTitle: 'Doc',
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
    ],
    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/about ' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Yulong Fang',
    },
  },
});
