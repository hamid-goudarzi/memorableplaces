import React from 'react'
import Monuments from '../monuments/Monuments'


const Section1 = () => {
    return (
        <div>
            <section id="one" className="wrapper style1">
                <div className="inner">
                    <article className="feature left">
                        <span className="image"><img src="images/pic01.jpg" alt="" 
                            style={{ width: '100%', height: '20vw', 'object-fit': 'cover' }}

                        /></span>
                        <div className="content">
                            <h2>This can be an example of your memorable monument</h2>
                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                            <ul className="actions">
                                <li>
                                    <a onClick={() => alert('default example cannot be deleted')} className="button danger">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="feature right">
                        <span className="image"><img src="images/pic02.jpg" alt=""
                            style={{ width: '100%', height: '20vw', 'object-fit': 'cover' }}

                        /></span>
                        <div className="content">
                            <h2>This can be another example of your memorable monument</h2>
                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                            <ul className="actions">
                                <li>
                                    <a onClick={() => alert('default example cannot be deleted')} className="button danger">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <Monuments/>
                </div>
            </section>
        </div>
    );
}

export default Section1;