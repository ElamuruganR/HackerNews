import React from 'react';
import './style.css';
import Logo from '../../molecules/logo/Logo';
import HeaderNav from '../../molecules/navbar/HeaderNav';
import LoginLink from '../../molecules/loginlink/LoginLink';

export default function Header() {
    return(
        <table className="header" border="0" cellPadding="0" cellSpacing="0" width="100%">
            <tbody>
                <tr>
                    <td className="logo"><Logo /></td>
                    <td className="headernav"><HeaderNav /></td>
                    <td className="login"><LoginLink /></td>
                </tr>    
            </tbody>
        </table>
    )
}