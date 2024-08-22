import React, { useRef, useState } from "react";

export function CharacterCounter() {
    const inputRef = useRef(null);
    const [characterCount, setCharacterCount] = useState(0);

    const handleInputChange = () => {
        const textLength = inputRef.current.value.length;
        setCharacterCount(textLength);
    };

    return (
        <div>
            <h1>Character Counter</h1>
            <textarea
                ref={inputRef}
                onChange={handleInputChange}
                placeholder="Type something..."></textarea>
            <p>Character Count: {characterCount}</p>
        </div>
    );
}