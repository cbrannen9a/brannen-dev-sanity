import React from "react";
import { BlockEditor } from "part:@sanity/form-builder";

// should probably extract this into its own file
const SpellingCheckEditor = (props) => {
  const ref = React.createRef();

  React.useEffect(() => {
    const containerEl = ref.current;
    if (!containerEl) return;

    const editor = containerEl.querySelector('[data-slate-editor="true"]');

    editor && editor.setAttribute("spellcheck", true);
  }, [ref]);

  return (
    <div ref={ref}>
      <BlockEditor {...props} />
    </div>
  );
};

class CustomEditor extends React.Component {
  render() {
    return <SpellingCheckEditor {...this.props} />;
  }
}

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  inputComponent: CustomEditor,
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      title: "Image",
      type: "figure",
    },
    {
      title: "CodeBlock",
      name: "code",
      type: "code",
    },
  ],
};
