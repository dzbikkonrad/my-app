import React from 'react';
import Title from "./components/Title";
import Trips from "./components/Trips";
import {TitleVariants} from "./constants";
import useFetch from "./customHooks/useFetch";

function App() {
    const {data, loading, error} = useFetch('http://localhost:3000/trips');

    if (loading) {
        return <Title text={'Loading...'} variant={TitleVariants.HEADER} />
    }

    if (error) {
        return <Title text={error} variant={TitleVariants.HEADER} />
    }

    return (
        <>
            {data && <>
                <Title text={'Recently viewed trips'} variant={TitleVariants.HEADER} />
                <Trips trips={data} />
            </>}
        </>
    );
}

export default App;
