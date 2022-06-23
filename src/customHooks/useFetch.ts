import {useState, useEffect} from 'react';

const useFetch = (url: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);


    const fetchData = async() => {
        setLoading(true);

        try {
            const response = await fetch(url);

            if(response.ok) {
                const data = await response.json();
                setData(data);
            } else {
                throw Error(response.statusText);
            }
        } catch (error) {
            setError('There was a problem fetching data: ' + error);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {data, loading, error}
}

export default useFetch;