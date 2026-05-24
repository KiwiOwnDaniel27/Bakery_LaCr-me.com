import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { TbBasketSearch } from "react-icons/tb";


const SearchBar = () => {

    const [query, setQuery] = useState('');

    const debouncedQuery =  useDebounce(query, 500);

    const [result, setResult] = useState ([]);

    useEffect(() => {
        if (!debouncedQuery){
            setResult([]);

            return;
        }

        axios.get(`https://jsonplaceholder.typicode.com/users?username_like=${debouncedQuery}`)
        .then(res =>{
            setResult(res.data.map(u => u.username));
        })
        .catch(err => console.error(err));
    }, [debouncedQuery]);


  return (
    <div className="container relative hidden 2xl:block xl:block lg:block md:block max-w-auto mt-3 w-75
          2xl:p-12 xl:mt-6 lg:mt-6 md:mt-6 sm:mt-6
          2xl:w-150 xl:w-111 lg:w-90 md:w-70 sm:w-50
          hover 
          scale-96
          hover:scale-99
          transition
          duration-300
          cursor-pointer">
        <TbBasketSearch className="absolute right mt-2 w-6 h-6 2xl:w-11 2xl:h-11
        ml-60 2xl:ml-126 xl:ml-93 lg:ml-73 md:ml-53 sm:ml-33" />
        <input className="w-full px-6 py-2 border rounded-full bg-white ml-3 2xl:text-2xl md:
        2xl:py-4 2xl:px-12 " type="text" placeholder="Buscador..." value={query} onChange={e => setQuery(e.target.value)} />
        <ul className="absolute w-full left-0 mt-3 shadow-lg z-50 max-h-6">
            {result.map((r, i) => (
                <li className="p-2 mt-2 bg-white rounded-full border-2 ml-0 w-full" key={i}>
                    {r}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SearchBar;