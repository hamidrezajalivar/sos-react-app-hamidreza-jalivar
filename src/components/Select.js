import Select from 'react-select';

const SelectFilter = (props) => {

    return (
        <>
    
            <Select
        value={props.value}
        onChange={props.changeHandler}
        options={props.options}
        placeholder={props.placeholder}

      />

        </>
    );
}

export default SelectFilter;