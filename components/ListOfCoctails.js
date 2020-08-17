import React from 'react'
import ItemOfCoctails from './ItemOfCoctails'

const ListOfcoctails = ({exampleList}) => {
    return(
        <>
            {exampleList && exampleList.map( (exmpList, index) => <ItemOfCoctails key={index} exmp={exmpList} />)}
        </>
    )
}

export default ListOfcoctails