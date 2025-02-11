import React from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import {CommentSection} from '@site/src/components/CommentSection';

export default function DocPaginatorWrapper(props) {
    return (
        <>
            <DocPaginator {...props} />
            <CommentSection/>
        </>
    );
}