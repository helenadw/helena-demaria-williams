export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6053915685a11126ddd98455',
                  title: 'Sanity Studio',
                  name: 'helena-demaria-williams-studio',
                  apiId: '85688a7c-5ba4-4590-8f8e-4010d4c948c6'
                },
                {
                  buildHookId: '6053915621ad631702e85e2f',
                  title: 'Portfolio Website',
                  name: 'helena-demaria-williams',
                  apiId: '4a09ba99-5f1f-4b97-9735-e4f40215df48'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hcdw/helena-demaria-williams',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://helena-demaria-williams.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
