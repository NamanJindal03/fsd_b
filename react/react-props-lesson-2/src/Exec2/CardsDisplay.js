import React, {useState} from 'react'
import Card from './Card'


export default function CardsDisplay() {
    const parentStyle = {
        display: "flex"
    }
    const cardContainer = {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px", 
    }
    const [isViewAll, setIsViewAll] = useState(false)
    
  return (
    <>
        <div style={parentStyle}>
            <h1>These are my Cards</h1>
            <button onClick={() => setIsViewAll(!isViewAll)}> 
                {isViewAll ? 'Show Less': 'View All'}
            </button>
        </div>
        <div style={cardContainer}>
            <Card isViewAll={isViewAll}/>
            <Card isViewAll={isViewAll}/>
            <Card isViewAll={isViewAll}/>
            {isViewAll ? 
            <>
                <Card isViewAll={isViewAll}/>
                <Card isViewAll={isViewAll}/>
                <Card isViewAll={isViewAll}/>
            </> : null}
        </div>
    </>
  )
}
