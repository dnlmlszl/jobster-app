import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow, FormRowSelect } from ".";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";
import { useState, useMemo } from "react";

const SearchContainer = () => {
    const [localSearch, setLocalSearch] = useState('')
    const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
        useSelector((store) => store.allJobs);
    const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
    const dispatch = useDispatch();


    const handleSearch = (e) => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalSearch('')
        dispatch(clearFilters());
    };

    const debounce = () => {
        let timeoutID
        return (e) => {
            setLocalSearch(e.target.value)
            clearTimeout(timeoutID)
            timeoutID = setTimeout(() => {
                dispatch(handleChange({ name: e.target.name, value: e.target.value }))
            }, 1000)
        }
    }

    const optimizedDebounce = useMemo(() => debounce(), [])
    return (
        <Wrapper>
            <form className="form">
                <h4>Search form</h4>
                <div className="form-center">
                    <FormRow
                        type="text"
                        name="search"
                        id="search"
                        value={localSearch}
                        handleChange={optimizedDebounce}
                    />
                    <FormRowSelect
                        labelText="status"
                        name="searchStatus"
                        id="searchStatus"
                        value={searchStatus}
                        handleChange={handleSearch}
                        list={["all", ...statusOptions]}
                    />
                    <FormRowSelect
                        labelText="type"
                        name="searchType"
                        id="searchStatus"
                        value={searchType}
                        handleChange={handleSearch}
                        list={["all", ...jobTypeOptions]}
                    />
                    <FormRowSelect
                        name="sort"
                        id="sort"
                        value={sort}
                        handleChange={handleSearch}
                        list={sortOptions}
                    />
                    <button
                        className="btn btn-block btn-danger"
                        disabled={isLoading}
                        onClick={handleSubmit}
                    >
                        clear filters
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};
export default SearchContainer;
