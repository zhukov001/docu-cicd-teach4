import React from 'react';
import Giscus from "@giscus/react";
import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="zhukov001/docu-cicd-teach4"
      repoId="R_kgDON35OgA"
      category="General"
      categoryId="DIC_kwDON35OgM4Cm3oM"  // E.g. id of "General"
      mapping="url"                        // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
