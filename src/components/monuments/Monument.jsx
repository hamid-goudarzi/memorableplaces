import React from 'react'
import { deleteMonument } from '../../actions/monuments';


const Monument = ({ fullname, imageUrl, describe, deleted }) => {
    return (
        <div>
            <section id="one" className="wrapper style1">
                <div className="inner">
                    <article className="feature left">
                        <span className="image"><img
                            src={`${imageUrl}`} alt=""
                            style={{ width: '100%', height: '20vw', 'object-fit': 'cover' }}
                        /></span>
                        <div className="content">
                            <h2>{`${fullname}`}</h2>
                            <p>{`${describe}`}</p>
                            <ul className="actions">
                                <li>
                                    <a onClick={deleted} className="button danger">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </article>

                </div>
            </section>
        </div>
    );
}

export default Monument;