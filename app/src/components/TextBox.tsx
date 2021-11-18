import React, {useState, useRef} from 'react';


interface Person {
    firstName: string
    lastName: string,
}

interface Props {
    text: string
    bool?: boolean
    integer?: number
    fn?: (value: string) => string
    person: Person
}


export const TextBox: React.FC<Props> = () => {
    const [count, setCount] = useState<number | null>(5);
    const textRef = useRef<HTMLInputElement>(null)

    setCount(null)
    return(
        <div>
            <input ref={textRef}/>
        </div>
    )
}