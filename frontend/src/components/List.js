import React from 'react';
import './List.css';

const List = ({ ...rest }) => {
    return <li {...rest}></li>;
};

export default List;
