import React, { Fragment } from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating, onClick, style}) => {
  return (
    <Fragment>
    {
        [...Array(5)].map((_,i) => (
            <span 
                key={i} 
                onClick={() => onClick(i)} 
                style={style}
            >
            {rating>i ? ( <AiFillStar size={15} /> ) 
            : (<AiOutlineStar size={15} />)}
            </span>
        ))
    }
    </Fragment>
  )
}

export default Rating;