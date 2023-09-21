import { FC, useMemo } from "react";
import ContentBox from "../ContentBox/ContentBox";
import Search from "../Search/Search";

import "./Header.scss";
import Dropdown from "../Dropdown/Dropdown";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
    const options = useMemo(
        () => ["All", "Video Slots", "Classic Slots", "Scratch card"],
        []
    );

    return (
        <div className="headerWrapper">
            <ContentBox className="headerFilter">
                <h2 className="headerSelectName">Game Type</h2>
                <Dropdown options={options} />
            </ContentBox>
            <ContentBox className="headerSearch">
                <Search />
            </ContentBox>
        </div>
    );
};

export default Header;
