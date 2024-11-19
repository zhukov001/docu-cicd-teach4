---
sidebar_position: 2
---

# Create a Document

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

:::info[Reminder]

The `**(...)**` stands for bold font, as we learned in [Introduction to Markdown](../md_intro.md).

:::

After committing and the update of the website, a new document is now available at `https://<my_git_account>.github.io/docu-cicd-teach4/docs/hello`.

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

The sidebar of a page can be customized via metadata on the page itself. For example, to change its label and position, you can use:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```
Is it in the expected place? Change if necessary. 

It is also possible to create your sidebar explicitly in `sidebars.ts` (you can simply uncomment corresponding section in `sidebars.ts` file):

```ts title="sidebars.ts"
export default {
  tutorialSidebar: [
    'github',
    'fork_and_deploy',
    'md_intro',
    'docusaurus_intro',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
    'task',
    // highlight-next-line
    'hello',
  ],
};
```

:::info[Excercise]
Which has precedence in Docusaurus: `sidebars.ts` or the `position` attribute in Markdown files?
:::

To add or fix a link in the Docusaurus footer, edit the `docusaurus.config.ts` file in your project. Look for the `themeConfig` section, and find the footer object. 

:::info[Excercise]
One of the links in the current implementation is not correct, please find and correct it.
:::
