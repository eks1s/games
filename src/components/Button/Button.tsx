import classNames from "classnames";
import { FC, ReactNode } from "react";

import "./Button.scss";

interface IButtonProps {
    children: ReactNode;
    onClick: () => void;
    className?: string;
}

const Button: FC<IButtonProps> = (props) => {
    const { children, onClick, className } = props;

    return (
        <button className={classNames("button", className)} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
