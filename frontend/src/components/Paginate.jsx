
import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getHomes, selectAllHomes } from '../features/houses/houseSlice'
import Spinner from '../components/Spinner'


const Paginate = ({ page }) => {
    const dispatch = useDispatch()
    const {numberOfPages} = useSelector(selectAllHomes)

    const { isLoading, isError, message } = useSelector(selectAllHomes)


    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if(page){
            dispatch(getHomes(page))
        }
            
    }, [ isError, message, dispatch, page])

    if (isLoading) {
        return <Spinner />
      }

    return (
        <Pagination 
            count={numberOfPages}
            page={Number(page) || 1}
            variant='outlined'
            color='primary'
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/houses?page=${item.page}`} />
            )}
        />
    )
}

export default Paginate