

// We import object and document schemas
//import blockContent from './blockContent'


// Then we give our schema to the builder and provide the result to Sanity
export default[
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
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
    },
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
      title: "Question",
      name: "question",
      type: "object",
      fields: [
        {
          title: "QuestionText",
          name: "questionText",
           type: 'array', 
            of: [{type: 'block'}]
        },
        
        {
          title: "Entry",
          name: "entry",
          type: "string"
        }
      ]
    },
    {
      name: 'surveys',
      type: 'document',
      title: 'Surveys',
      fields: [
        {
          name:'title',
          type:'string',
          title:'Title'
        },
        {
          name: 'introText',
          type: 'string',
          title: 'Intro text'
        },
        {
          title: 'Survey Award', 
          name: 'surveyAwardText',
          type: 'array', 
          of: [{type: 'block'}]
        },
        {
          title: "Survey",
          name: "survey",
          type: "array",
          of: [{type: "question"}]
        }
      ]
    },
    {
      title: 'Guide',
      name: 'guide',
      type: 'document',
      fields: [
    {
      title: 'Guide Text Block', 
      name: 'guideTextBlock',
      type: 'array', 
      of: [{type: 'block'}]
    },
      ]
    }
  /*
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
    },
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
      title: "Question",
      name: "question",
      type: "object",
      fields: [
        {
          title: "QuestionText",
          name: "questionText",
          type: "string"
        },
        {
          title: "Entry",
          name: "entry",
          type: "string"
        }
      ]
    },
    {
      name: 'surveys',
      type: 'document',
      title: 'Surveys',
      fields: [
        {
          name:'title',
          type:'string',
          title:'Title'
        },
        {
          name: 'introText',
          type: 'string',
          title: 'Intro text'
        },
        {
          title: "Survey",
          name: "survey",
          type: "array",
          of: [{type: "question"}]
        }
      ]
    }*/
    ]
