---
sidebar_position: 1
---

# Create your first Markdown Page

Create a new file at `src/pages`:

```mdx title="src/pages/my-markdown-page.md"
# My First Markdown page

This is a Markdown page
```

:::info[Reminder]

The `#` stands for header, as we learned in [Introduction to Markdown](../md_intro.md).

:::

After successful creation of file and committing the changes a new page can be accessed via direct link at `https://<my_git_account>.github.io/docu-cicd-teach4/my-markdown-page`, and can now be linked th the footer or from other pages.

To add or fix a link in the Docusaurus footer, edit the `docusaurus.config.ts` file in your project. Look for the `themeConfig` section, and find the footer object. 

:::info[Excercise]
One of the links in the current implementation is not correct, please find and correct it.
:::
