import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'website-hotell'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5aTURNX2hFQUFDSUFOZGg3.77-9BRM877-977-977-977-9LlLvv73vv70577-9SmUN77-977-977-9JO-_ve-_ve-_vS8HIl4T77-9bu-_vQ',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
  ],
})