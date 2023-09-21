import classNames from "classnames";
import { FC, memo, useMemo, useState } from "react";

import "./Dropdown.scss";
import { useAppDispatch } from "../../redux/store";
import { setOption } from "../../redux/slice/optionsSliceReducer";

interface IDropdownProps {
    options: Array<string>;
}

const Dropdown: FC<IDropdownProps> = (props) => {
    const { options } = props;
    const [selectedOption, setSelectedOption] = useState<string>("All");
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const filterOptions = useMemo(() => {
        dispatch(setOption(selectedOption));
        return options.filter((option) => option !== selectedOption);
    }, [dispatch, options, selectedOption]);

    return (
        <div className="dropdownWrapper">
            <div
                className={classNames("dropdownToggle", isOpen ? "open" : "")}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption || "All"}
            </div>
            {isOpen && (
                <ul className="dropdownMenu">
                    {filterOptions
                        .filter((option) => option !== selectedOption)
                        .map((option) => (
                            <li
                                className="dropdownOption"
                                key={option}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default memo(Dropdown);
