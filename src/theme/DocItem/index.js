import React from 'react';
import { useDocItem } from '@docusaurus/plugin-content-docs/client';
import DocItem from '@theme-original/DocItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
import useIsBrowser from '@docusaurus/useIsBrowser';


export default function DocItemWrapper(props) {
  const { metadata, isDocItem } = useDocItem()
  const isBrowser = useIsBrowser();

  const { frontMatter, slug, title } = metadata
  const { enableComments } = frontMatter
  return (
    <>
      <DocItem {...props} />
      {(enableComments && isDocItem) && (
        <GiscusComponent />
      )}
    </>
  );
}
