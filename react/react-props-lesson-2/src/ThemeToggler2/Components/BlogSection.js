import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import ThemeColors from '../Utils/Colors'

export default function BlogSection() {
    const theme = useContext(ThemeContext);
    const themeCSS = ThemeColors[theme[0]];
    console.log(themeCSS);
  return (
    <div style={{
        color: `${themeCSS.textColor}`,
        backgroundColor: `${themeCSS.backgroundColor}`,
        border : `1px solid ${themeCSS.border}`
    }}>
        <div className='blogHeader'>
            <div>Blog1</div>
            <div>1k views</div>
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, at.
        </div>
        <div className='blogFooter'>
            <div>Author: Naman</div>
            <div>Like Share</div>
        </div>
    </div>
  )
}
