import React from 'react'
import { useSearchParams, createSearchParams, useLocation } from 'react-router-dom'

export default function SearchQuery() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);
    const ourTest = searchParams.get("fruits")
    const extractRandom = searchParams.get("alwaysStatic")
  return (
    <>
        <div>The selected search query param is {ourTest}</div>
        <div>The second search query param's data is {extractRandom}</div>
        {
            ["apple", "banana", "guava", "grapes" ].map((test, index)=>{
                return (
                    <div key={index}>
                        <label htmlFor="">{test}</label>
                        <input 
                            type="radio" 
                            value={test}
                            checked={ourTest === test}
                            onChange={(e) => setSearchParams(
                                createSearchParams({fruits: e.target.value, alwaysStatic: 'stat'})
                            )}
                        />
                    </div>
                )
            })
            
        }   
    </>
  )
}

