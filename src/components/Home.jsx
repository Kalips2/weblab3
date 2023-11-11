// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AppHeader from "./shared/header/header";
import Footer from "./shared/footer/footer";

const Home = () => {
    return (
        <div>
            <AppHeader text="Система моніторингу інформації за лейблами" />
            <div className="container mt-4 justify-content-center align-items-center">
                <div className="row d-flex">
                    <div className="col-md-4">
                        <Link to="/labels" className="btn btn-light btn-block btn-square mb-3">
                            Переглянути усі лейбли
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/labels/find" className="btn btn-light btn-block btn-square mb-3">
                            Переглянути лейбл за ID
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/labels/create" className="btn btn-light btn-block btn-square mb-3">
                            Створити лейбл
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
