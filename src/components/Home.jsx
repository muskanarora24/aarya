import React, { useState, useEffect, useContext} from 'react';
import Slideshow from './Slideshow';
import ContinueWatch from './ContinueWatch';
import { Contextone } from './Context';
import MainCards from './MainCards';
import Moviecard from './Moviecard';
import {SyncLoader} from "react-spinners";

const Home = (props) => {
    const url = props.location.pathname;
    const parts = url.split('/');
    console.log(parts[1])
    const lastPart = parts.pop();
    console.log(lastPart);

    const [sectionlist, setSectionlist] = useState([]);
    const [continueList, setContinueList] = useState([]);
    const [banner, setBanner] = useState([]);
    const [typeId, setTypeId] = useState(0);
    const [isHomepage, setIsHomepage] = useState(1);
    const [languageId, setLanguageId] = useState(0);
    const [loading, setLoading] = useState(false);

    const countercontext = useContext(Contextone);

    useEffect(() => {
        let type_idd = 0;
        let isHome = 1;
        if (url !== '/') {
            type_idd = lastPart;
            isHome = 2;
        }
        setTypeId(type_idd);
        setIsHomepage(isHome);
    }, [lastPart]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await fetch(apiUrl+'/api/section_list', {
                    method: 'POST',
                    body: JSON.stringify({ type_id: typeId, is_home_page: isHomepage, language_id: languageId }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                });
                setLoading(false);
                const data = await response.json();
                setSectionlist(data.result);
                setContinueList(data.continue_watching);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [typeId, isHomepage, languageId]);

    useEffect(() => {
        const fetchBanner = async () => {
            setLoading(true);
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await fetch(apiUrl+'/api/get_banner', {
                    method: 'POST',
                    body: JSON.stringify({ type_id: typeId, is_home_page: isHomepage, language_id: languageId}),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                });
                setLoading(false);
                const data = await response.json();
                setBanner(data.result);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBanner();
    }, [typeId, isHomepage, languageId]);

    return (
        <>
            <div>
                {loading ? (
                    <div className="loader-set">
                        <SyncLoader
                            color={'#0000CD'}
                            loading={loading}
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                ) : (
                    <div className="container-fluid" >
                        <div className="home-body">
                            <Slideshow data={banner} />
                            {countercontext.isLogged ? <ContinueWatch data={continueList} /> :''}
                            <Moviecard data={sectionlist} />
                        </div>
                    </div>
                )}
            </div>
        </>
        
    );
};

export default Home;