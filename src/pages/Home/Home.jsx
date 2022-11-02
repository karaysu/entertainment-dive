import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { useAuth } from 'auth'

import './Home.scss';

import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import InfiniteScrolling from '../../components/InfiniteScrolling/InfiniteScrolling'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import Button from 'components/Button/Button'
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';
import Modal from 'components/Modal/Modal';
import LoginForm from 'components/Forms/LoginForm/LoginForm';

import NoPoster from '../../assests/images/no_poster.jpg'

function Home(props) {
    const {signOut, isUserLoggedIn} = useAuth();
    const navigate = useNavigate();

    const [isSearchAcitve, setIsSearchActive] = useState(false);

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

    //Passing the onSearchSubmit to Infinite Scrolling
    InfiniteScrolling(props.onSearchSubmit);

    //Rendering the API cards
    const renderCards = arr => (
        arr.map((card, index) => {
            return <Card key={index} id={card.id} title={card.title} poster={card.poster_path ? card.poster_path : NoPoster} doesHavePoster={card.poster_path != null} />
        })
    )

    const handleSearchSubmit = () => {
        if (props.searchText == "") {
            return;
        }

        // Update the UI
        setIsSearchActive(true);

        props.onSearchSubmit();
    }

    return (
        <div className="home">
            <div className={`header-container ${isSearchAcitve ? "header-active" : ""}`}>
                <div className='account-buttons'>
                    {
                        isUserLoggedIn() ? (<>
                            <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
                            <Button onClick={() => {signOut(); navigate("/")}}>Sign Out</Button>
                        </>) :
                        (<>
                            <Button onClick={() => setIsRegisterModalOpen(true)}>Register</Button>
                            <Button onClick={() => setIsLoginModalOpen(true)}>Login</Button>
                        </>)
                    }
                </div>
                <h1 className="website-name">Entertainment Dive</h1>
                <div className='home-searchbar'>
                    <SearchBar
                        searchText={props.searchText}
                        setSearchText={props.setSearchText}
                        onSearchSubmit={handleSearchSubmit}
                        emptySearchResults={props.emptySearchResults}
                    />
                </div>
            </div>
            <div className="card-container">
                {renderCards(props.searchResults)}
            </div>
            <ScrollToTop />
            {/* <button className="test" onClick={props.emptySearchResults} type="submit">Test</button> */}


            <Modal
                isOpen={isRegisterModalOpen}
                closeModal={() => setIsRegisterModalOpen(false)}
                title="Create an account!"
            >
                <RegisterForm />
            </Modal>

            <Modal 
                isOpen={isLoginModalOpen} 
                closeModal={() => setIsLoginModalOpen(false)} 
                title="Dive into your entertainment hub!"
            >
                <LoginForm />
            </Modal>

        </div>
    );
}

export default Home;
