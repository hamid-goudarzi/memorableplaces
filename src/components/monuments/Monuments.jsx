import React from 'react'
import Monument from './Monument';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMonument } from '../../actions/monuments';


const Monuments = () => {
    const monuments = useSelector(state => state.monuments)
    const dispatch = useDispatch()

    return (
        <div>
            {monuments.map(monument => <Monument key={monument.id} fullname={monument.fullname} imageUrl={monument.imageUrl} describe={monument.describe} deleted={() => dispatch(deleteMonument(monument.id))} />)}
        </div>
    );
}

export default Monuments;