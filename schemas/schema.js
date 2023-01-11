// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
//import blockContent from './blockContent'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'blog',
      type: 'document',
      title: 'blog',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle'
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug'
        }
      ]
     
    },
    {
      name: 'frontpage',
      type: 'document',
      title: 'frontpage',
      fields: [
        {
          name:'title',
          type:'string',
          title:'Title'
        },
        {
          name: 'ingress',
          type: 'string',
          title: 'Ingress'
        }
      ]
    }
  ]),
})
