import React, { ReactElement, ReactNode } from 'react'


interface Props {
    children: object
    classDefinition: string
}

export const Wrapper: React.FC<Props> = ({children, classDefinition}): ReactElement => {
    return (
        <section className={classDefinition}>
            {children}
        </section>
    )
    
}
