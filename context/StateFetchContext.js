import React, {useState, useEffect} from 'react'
import FetchContext from './FetchContext'
import axios from 'axios'

const StateFetchContext = ({children}) => {
    const [list, setList] = useState([])
    const [listOfCoctails, setListOfCoctails] = useState([])
    const [listFilter, setListFilter] = useState([])

    useEffect( () => {
        setList([])
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then( res => {
            setList(res.data.drinks)
            setListOfCoctails([])
            res.data.drinks.map( lis => {
                axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${lis.strCategory}`)
                .then( res => setListOfCoctails(prev => [...prev, res.data.drinks]))
            })
            setListFilter([])
            res.data.drinks.map( l => {
                setListFilter( prev => [...prev, {strCategory: l.strCategory, check: true}])
            })
        })
    }, [])

    useEffect(() => {
        setListOfCoctails([])
            list.map( lis => {
                axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${lis.strCategory}`)
                .then( res => setListOfCoctails(prev => [...prev, res.data.drinks]))
            })
    }, [list])


    const onTogle = (strCategory) => {
        setListFilter(
            listFilter.map(listF => {
                if(listF.strCategory === strCategory) {
                    listF.check = !listF.check
                }
                return listF
            })
        )
      }

    return(
        <FetchContext.Provider value={{
            list, setList, listOfCoctails,
            listFilter,
            onTogle
        }}>
            {children}
        </FetchContext.Provider>
    )

}

export default StateFetchContext