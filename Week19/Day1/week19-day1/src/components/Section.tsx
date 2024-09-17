import { ReactElement, ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    content: string;
}

const Section = ({children, content}: SectionProps): ReactElement => {
    return (
        <>
            <section>
                {children}
                <p>{content}</p>
            </section>
        </>
    );
}

export default Section;