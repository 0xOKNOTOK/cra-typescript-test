import React from 'react';

interface Props {
    author: string
    id?: number
    staff?: boolean
}


export const ArticleInfo: React.FC<Props> = ({author, id, staff}) => {

    return(
        <section id="articleInfo">
            <h2>Author -  {author}</h2>
            <p>{id?.toString()} {staff?.toString()}</p>

        </section>
    )

}