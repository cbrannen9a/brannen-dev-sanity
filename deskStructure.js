import S from "@sanity/desk-tool/structure-builder";
import {
  MdSettings,
  MdWidgets,
  MdInsertDriveFile,
  MdArrowForward,
  MdMore,
  MdShortText,
  MdAssignment,
  MdLocalPostOffice,
} from "react-icons/md/index";

const hiddenDocTypes = (listItem) =>
  ![
    "siteSettings",
    "page",
    "post",
    "project",
    "route",
    "skills",
    "category",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(MdSettings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("Content")
        .icon(MdWidgets)
        .child(
          S.list()
            .title("Content")
            .items([
              S.listItem("post")
                .title("Posts")
                .icon(MdLocalPostOffice)
                .child(
                  S.documentTypeList("post")
                    .title("Posts")
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("post")
                    )
                ),
              S.listItem("project")
                .title("Projects")
                .icon(MdAssignment)
                .child(
                  S.documentTypeList("project")
                    .title("Projects")
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("project")
                    )
                ),
              S.listItem("category")
                .title("Categories")
                .icon(MdMore)
                .child(
                  S.documentTypeList("category")
                    .title("Categories")
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("category")
                    )
                ),
              S.listItem("skills")
                .title("Skills")
                .icon(MdShortText)
                .child(
                  S.documentTypeList("skills")
                    .title("Skills")
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("skills")
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Pages")
        .icon(MdInsertDriveFile)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem("page")
                .title("Pages")
                .icon(MdInsertDriveFile)
                .child(
                  S.documentTypeList("page")
                    .title("Pages")
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("page")
                    )
                ),

              S.listItem("route")
                .title("Routes")
                .icon(MdArrowForward)
                .child(
                  S.documentTypeList("route")
                    .title("Routes")
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType("route")
                    )
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
