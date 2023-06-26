// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const math = require('remark-math')
const footnote = require('remark-numbered-footnote-labels')

async function createConfig () {
  const katex = (await import('rehype-katex')).default
  return {
    title: 'The Eppo Docs',
    tagline: "Documentation for Eppo's experimentation platform.",
    url: 'https://docs.geteppo.com',
    baseUrl: '/',
    staticDirectories: ['static'],
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'eppo', // Usually your GitHub org/user name.
    projectName: 'eppo', // Usually your repo name.

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: 'https://github.com/Eppo-exp/eppo-docs/tree/main',
            remarkPlugins: [math, footnote],
            rehypePlugins: [katex]
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
            'https://github.com/Eppo-exp/eppo-docs/tree/main'
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css')
          },
          sitemap: {
            changefreq: 'weekly',
            priority: 0.5,
            ignorePatterns: ['/tags/**'],
            filename: 'sitemap.xml'
          }
        })
      ]
    ],

    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css',
        type: 'text/css',
        integrity:
        'sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC',
        crossorigin: 'anonymous'
      }
    ],

    clientModules: [
      require.resolve('./src/rudderstack.config.js')
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {
        // The application ID provided by Algolia
        appId: 'KJBY2Y7V19',

        // Public API key: it is safe to commit it
        apiKey: '83bf8979d84b0837eef8f58d0af74ab8',

        indexName: 'netlify_f05d58a8-38b6-4be5-9850-e224709211dc_main_all'

        // ... other Algolia params
      },
      navbar: {
        // title: 'Eppo',
        logo: {
          alt: 'eppo logo',
          src: 'img/eppo_logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'what-is-eppo',
            position: 'left',
            label: 'What is Eppo?'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Quick start guides",
            items: [
              {
                label: "Initial setup",
                to: "/setup-quickstart",
              },
              {
                label: "Feature flag quick start",
                to: "/feature-flag-quickstart",
              },
              {
                label: "Experiment quick start",
                to: "/experiment-quickstart",
              }
            ],
          },

          {
            title: "Links",
            items: [
              {
                label: "Eppo",
                to: "https://geteppo.com",
              },
              {
                label: "Blog",
                to: "https://geteppo.com/blog",
              },
              {
                label: "Eppo application",
                to: "https://eppo.cloud",
              },
              {
                label: "Product updates",
                to: "https://updates.eppo.cloud",
              },
            ],
          },
          {
            title: "Reference",
            items: [
              {
                label: "API reference",
                to: "https://eppo.cloud/api/docs#/",
              },
              {
                label: "Security",
                to: "https://www.geteppo.com/security",
              }
            ],
          }

        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eppo, Inc.`
      },
      prism: {
        additionalLanguages: ['java', 'groovy', 'ruby'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false
      }
    })
  }
}

module.exports = createConfig
