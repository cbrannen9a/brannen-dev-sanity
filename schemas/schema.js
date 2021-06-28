import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import {
  category,
  page,
  post,
  project,
  route,
  siteSettings,
  skills,
} from "./documents";
import {
  banner,
  blockContent,
  card,
  cards,
  cta,
  figure,
  hero,
  simpleBlockContent,
  social,
  socialLink,
  contentPreview,
} from "./objects";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // Documents
    category,
    page,
    post,
    project,
    route,
    siteSettings,
    skills,
    // Objects
    banner,
    blockContent,
    card,
    cards,
    cta,
    contentPreview,
    figure,
    hero,
    simpleBlockContent,
    social,
    socialLink,
  ]),
});
