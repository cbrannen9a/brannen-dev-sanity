import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import { blockContent, figure } from "./objects";
import {
  author,
  category,
  page,
  post,
  project,
  siteSettings,
  skills,
} from "./documents";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    post,
    figure,
    page,
    author,
    category,
    skills,
    project,
    siteSettings,
    blockContent,
  ]),
});
