import React from 'react';

interface Props {
    title: string,
    username: string,
}


export const Header: React.FC<Props> = ({title, username}) => {
    return (
        <h1>{title}</h1>
    )
}