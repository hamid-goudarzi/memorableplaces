import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMonument, setImageUrl, setDescribe } from '../../actions/monument'
import { addMonument } from '../../actions/monuments'

const Section4 = () => {
    const dispatch = useDispatch()
    const monument = useSelector(state => state.monument)
    const imageUrl = useSelector(state => state.imageUrl)
    const describe = useSelector(state => state.describe)

    return (
        <div>
            <section id="four" className="wrapper style2 special">
                <div className="inner">
                    <header className="major narrow">
                        <h2>Add A Memorable Monument</h2>
                        <p>you can introduce your city monuments to the world</p>
                    </header>
                    <form action="#" method="POST" onSubmit={(event) => event.preventDefault()}>
                        <div className="container 75%">
                            <div className="row uniform 50%">
                                <div className="6u 12u$(xsmall)">
                                    <input onChange={(e) => dispatch(setMonument(e))} placeholder="Title" type="text" />
                                </div>
                                <div className="6u$ 12u$(xsmall)">
                                    <input onChange={(e) => dispatch(setImageUrl(e))} placeholder="image URL" type="text" />
                                </div>
                                <div className="12u$">
                                    <textarea onChange={(e) => dispatch(setDescribe(e))} placeholder="Discribe" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input onClick={() => dispatch(addMonument(monument, imageUrl, describe))} type="button" className="special" value="Submit" /></li>
                            <li><input type="reset" className="alt" value="Reset" /></li>
                            {console.log(monument)}
                        </ul>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Section4;

