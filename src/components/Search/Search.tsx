import { setFilter } from "../../redux/slice/filterSliceReducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Button from "../Button/Button";

import "./Search.scss";

function SearchComponent() {
    const filter = useAppSelector((state) => state.productFilter.filter);
    const dispatch = useAppDispatch();

    const handleSearchInputChange = (event: any) => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <div className="searchWrapper">
            <input
                type="text"
                placeholder="Search"
                value={filter}
                onChange={handleSearchInputChange}
                className="searchInput"
            />
            <Button onClick={() => console.log("gg")}>SEARCH</Button>
        </div>
    );
}

export default SearchComponent;
