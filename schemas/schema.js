// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import projectInformation from "./projectInformation"
import mainImage from "./mainImage"
import projectTag from "./projectTag"
import page from "./page"
import hero from "./hero"
import imageWithText from "./imageWithText"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'mySchema',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    projectInformation,
    mainImage,
    projectTag,
    page,
    hero,
    imageWithText
  ]),
})
