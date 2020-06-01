import React         from 'react';
import styled        from 'styled-components';
import {navigations} from '../../data/data';
import {Link}        from '@reach/router';

const UI = styled.ul`
    display: none;
  　list-style: none;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
    }

    @media (max-width: 590px) {
        background-color: white;
        display:flex;
        flex-flow: column nowrap;
        height: auto;
        opacity: .9;
        padding-top: 3.5rem;
        position: fixed;
        right: 0;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: -1rem;
        width: 100%;        
        z-index: 19;

        li {
            border-top: 1px solid rgba(243, 242, 242, 0.904);
            text-align: center;
        }

        li:nth-last-child(1) {
            border-bottom: 1px solid rgba(243, 242, 242, 0.904);
        }

        a {            
            color: black;
            text-decoration: none;
        }
    }
`;

const DropDownMenu = ({open}) => {
    return (
        <UI open={open}>
            {navigations.map((nav, idx) => (
                <li key={idx}>
                    <Link to={nav.url}>{nav.label}</Link>
                </li>
            ))}
        </UI>
    )
};

export default DropDownMenu;