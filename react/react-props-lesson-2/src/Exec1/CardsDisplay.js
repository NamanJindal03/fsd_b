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
            <Card />
            <Card/>
            <Card/>
            {isViewAll ? 
            <>
                <Card />
                <Card/>
                <Card/>
            </> : null}
        </div>
    </>
  )
}
// import React, {useState} from 'react'
// import Card from './Card'


// export default function CardsDisplay() {
//     const parentStyle = {
//         display: "flex"
//     }
//     const cardContainer = {
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "10px", 
//     }
//     const [isViewAll, setIsViewAll] = useState('View All')
    
//   return (
//     <>
//         <div style={parentStyle}>
//             <h1>These are my Cards</h1>
//             <button onClick={() => setIsViewAll('Show Less')}> 
//                 {isViewAll}
//             </button>
//         </div>
//         <div style={cardContainer}>
//             <Card />
//             <Card/>
//             <Card/>
//             {isViewAll === 'Show Less' ? 
//             <>
//                 <Card />
//                 <Card/>
//                 <Card/>
//             </> : null}
//         </div>
//     </>
//   )
// }
