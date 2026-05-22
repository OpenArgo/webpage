import * as path from 'path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: 'docs',
  title: 'OpenArgo',
  description: 'A Hardware First, Fully Open Source, Mobile Robot',
  logo: '/img/logo.png',
  globalStyles: path.join(__dirname, 'styles/index.css'),
  builderConfig: {
    html: {
      favicon: path.join(__dirname, 'static/img/favicon.ico'),
    },
    server: {
      publicDir: [
        {
          name: path.join(__dirname, 'static'),
          copyOnBuild: true,
        },
      ],
    },
  },
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/intro', activeMatch: '^(?!/($))' },
      {
        text: 'GitHub',
        link: 'https://github.com/OpenArgo/',
      },
    ],
    sidebar: {
      '/': [
        { text: 'Introduction', link: '/intro' },
        { text: 'ArgoConnect', link: '/ArgoConnect' },
        {
          text: 'ArgoBots',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'ArgoBot 0', link: '/ArgoBots/ArgoBot0' },
            { text: 'ArgoBot 1', link: '/ArgoBots/ArgoBot1' },
          ],
        },
        {
          text: 'Modules',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'ArgoDrive', link: '/modules/ArgoDrive' },
            { text: 'ArgoHub', link: '/modules/ArgoHub' },
            { text: 'ArgoPi', link: '/modules/ArgoPi' },
            { text: 'ArgoPower', link: '/modules/ArgoPower' },
            { text: 'ArgoQwiic', link: '/modules/ArgoQwiic' },
          ],
        },
      ],
    },
    footer: {
      message: `Copyright © ${new Date().getFullYear()} OpenArgo`,
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/OpenArgo/',
      },
      {
        icon: 'x',
        mode: 'link',
        content: 'https://x.com/OpenArgo',
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://discord.gg/b3QM3Vtcah',
      },
    ],
  },
});
