import React from 'react'

import { Box } from '@mui/material'

const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
        {data.map((item) => 
        <div
        
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
        >
          {item}
        </div>
        
        )}
    </div>
  )
}

export default HorizontalScrollbar