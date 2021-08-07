import React, { useEffect } from 'react';

const Page = ({
    title,
    children
}) => {

    useEffect(() => {
        document.title = title || "";
    }, [title]);

    return children;
};

export { Page };