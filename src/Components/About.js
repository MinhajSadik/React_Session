import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './Layout/Layout';

export default function About() {
    const { pathname } = useLocation()

    const navigate = useNavigate();
    console.log(pathname)

    function navigation() {
        if (pathname === '/about') {
            navigate("/contact/sdf")
        }
    }

    return (
        <div onClick={navigation}>
            <Layout>
                About
            </Layout>
        </div>
    )
}
