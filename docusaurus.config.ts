import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Aerify.Digital',
  tagline: 'Improbable Electronics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.aerify.digital/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AerifyDigital', // Usually your GitHub org/user name.
  projectName: 'AerifyDigital Device Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
        blog: {
          showReadingTime: true
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AerifyDigital',
      logo: {
        alt: 'AerifyDigital Logo',
        src: 'img/ad_logo-b2.png'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'AerTiny v3'
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Aerify-Digital/',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Aertiny v3',
              to: '/docs/aertiny'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            /*{
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },*/
            {
              label: 'Twitter',
              href: 'https://twitter.com/AerifyDigital'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main',
              to: 'https://aerify.digital/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Aerify-Digital/'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aerify.Digital LLC. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
