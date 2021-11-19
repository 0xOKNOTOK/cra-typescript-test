import React from 'react';
import { Wrapper } from './Wrapper';

interface Post {
    title: string,
    description: string,
    author: string,
}


export const Article: React.FC<Post> = ({title, description, author}) => {
    return (
        <Wrapper classDefinition="article">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{author}</p>
        </Wrapper>
    )
}