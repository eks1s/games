import { FC, ReactNode } from "react";
import "./ContentBox.scss";
import classNames from "classnames";

interface IContentBoxProps {
    children: ReactNode;
    className?: string;
}

const ContentBox: FC<IContentBoxProps> = (props) => {
    const { children, className } = props;

    return (
        <div className={classNames("contentBoxWrapper", className)}>
            {children}
        </div>
    );
};

export default ContentBox;
