import { ReactElement } from "react";

type HeadingProps = {
    title: string;
    subTitle?: string;
};

const Heading = ({title, subTitle}: HeadingProps): ReactElement => {
    return (
    <>
        <h2>Title: {title}</h2>
        <h3>SubTitle: {subTitle}</h3>
    </>
    );
};

export default Heading;