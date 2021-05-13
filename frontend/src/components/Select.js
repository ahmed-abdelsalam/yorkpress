import React from 'react';
import Select from 'react-select';

const Select = () => {
    return (
        <>
            <Select
                isMulti
                name="colors"
                onMenuOpen={onMenuOpen}
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </>
    );
};

export default Select;
