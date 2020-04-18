export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e9b118d8d1bfb527843ae86',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-dee34h3k',
                  apiId: 'a1db5344-eb09-441d-9d76-2d78a7db7af3'
                },
                {
                  buildHookId: '5e9b118d6446ed6db2988829',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-znmqaom9',
                  apiId: '507f797a-2be0-4b1c-95a8-19910d4fe095'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arsenijesavic/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-znmqaom9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
