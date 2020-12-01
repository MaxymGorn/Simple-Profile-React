import React, {Component} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import tringleImage from '../Images/about_tringle.png';
import manImage from '../Images/about_man.png';
import cssModule from "./info.css";
class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div className="info">
                <div className="container">
                    <div className="row">
                        <div className="col-5 col-xs-5 col-sm-5 col-md-5">
                            <div className="about-img" >
                                <img  src={tringleImage} alt=""/>

                                    <img className="man"  src={manImage} alt=""/>

                            </div>
                        </div>
                            <div className="col-7 col-xs-7 col-sm-7 col-md-7 about-right">
                                <h2 className="color-3"><b>About Me</b>
                                </h2>
                                <p className="p-first text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nesciunt sint,
                                    esse iure eius voluptatibus perspiciatis sequi fuga magni perferendis beatae
                                    ratione, nam culpa veritatis dolore sunt ut minus qui Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Cum ea delectus doloremque adipisci autem deleniti non
                                    nostrum, suscipit soluta perferendis.
                                </p>
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores pariatur animi
                                    sunt, assumenda dicta distinctio nostrum nisi, ullam dignissimos dolor!
                                </p>
                                <h3 className="color-3 social-link-text">

                                    <ul className="about-link">
                                        <li>New York<a href="#"></a></li>
                                        <li>Maldives<a href="#"></a></li>
                                        <li>San Francisco<a href="#"></a></li>
                                    </ul>
                                </h3>
                            </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Info;