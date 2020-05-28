import React  from 'react';
import styles from './styles.module.css';

const Table = ({items, ...props}) => (
    <table {...props}>
        <tbody>
            {items.map((item, idx) => (
                <tr key={idx}>
                    <th>{item.header}</th><td>{item.data}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;