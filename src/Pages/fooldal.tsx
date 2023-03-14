import { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface State{

}

export default class Fooldal  extends Component<{}, State> {
    
    render(){
        return <div>
            <Header />
            <br />
            <h1 style={{textAlign: 'center'}}>Üdvözöljük a Petrik Webhely-gyár oldalán</h1>
            <h3 style={{textAlign: 'center'}}>Válasszon a fenti menüpontok közül</h3>
            <Footer />
        </div>
    }
}