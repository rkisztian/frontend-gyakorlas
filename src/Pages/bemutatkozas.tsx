import { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";



export default class Bemutatkozas  extends Component<{}>{
    
    render(){

        
        return <div>
            <Header />
            <section>
            <h1 style={{textAlign: 'center'}}>Történet</h1>
            <p style={{textAlign: 'center'}}>A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.
                2022-ben multinacionális céggé nőtte ki magát a kezdetben önkéntesekből álló szervezet.</p>
            </section>

            <section>
                <h2>Jelenlegi tagjaink</h2>

            </section>
        <Footer />
        </div>
    }


}