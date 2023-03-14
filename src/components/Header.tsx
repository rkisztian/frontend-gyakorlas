import { Component, ReactNode } from "react";
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";



export default class Header  extends Component<{}>{
    render(): ReactNode {


        return <header>
            <nav className="navbar navbar-expand" style={{backgroundColor: "lightblue"}}>
            <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'><h4>Főoldal</h4></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/bemutatkozas'><h4>Bemutatkozas</h4></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/kapcsolat'><h4>Kapcsolat</h4></Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    }
}