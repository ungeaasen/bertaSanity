/*

    import schema from "../schema/schema.js";

    const projectId = "yibftbsd";
    const dataset = "production";


*/


import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';

export default defineConfig({
  title: "",
  projectId: "yibftbsd",
  dataset: "production",
  plugins: [deskTool({
    //structure: deskStructure
  })],
  schema: {
    types: schemas,
  },
  studio: {
    components: {
    }
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'settings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});

