import React, { Component } from 'react';
import './Header.css';
import jobs from '../constants/constants';
import Bla from './Bla';

// const Header = (props) =>{
//         return(
//             <div className='klasa'>Hello, {props.name}</div>
//         )
// }

class Header extends Component {
    render() {
        return (
            <div className='klasa'>
                {
                    jobs.map((job, index) =>
                        <Bla key={index}
                            title={job.title}
                            company={job.company}
                            location={job.location}
                            salary={job.salary} />
                        
                        /* moze i ovako */

                        /* <Bla key={index}
                            {...job} /> */
                    )
                }
            </div>
        )
    }
}

export default Header;