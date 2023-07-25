import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'webhotel'

export const client = prismic.createClient(repositoryName, {
    // If your repository is private, add an access token
    accessToken: 'MC5aTDh4X1JJQUFDUUE3VHJE.egvvv73vv73vv73vv71FeO-_vXM_Q--_vV8xSO-_ve-_ve-_vU_vv73vv73vv73vv71pf3BzKXAsCA',

    // This defines how you will structure URL paths in your project.
    // Update the types to match the custom types in your project, and edit
    // the paths to match the routing in your project.
    //
    // If you are not using a router in your project, you can change this
    // to an empty array or remove the option entirely.
    routes: [
        // {
        //     type: 'homepage',
        //     path: '/',
        // },
    ],
})