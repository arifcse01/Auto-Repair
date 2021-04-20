import React from 'react';

const ShowAllOrders = (props) => {
    const{name, email, title} = props.order;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>Credit Card</td>
        </tr>
    );
};

export default ShowAllOrders;