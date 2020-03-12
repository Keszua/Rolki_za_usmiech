import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

const permission = true;

const AdminPage = () => {
    return ( 
        <Route render={() => (
            permission ? (<AdminPageSorce />) : (
                <Redirect to="/login" />
            )
        )}/>
     );
}



class AdminPageSorce extends Component {
    state = { 
        windowSizeW: window.innerWidth,
        windowSizeH: window.innerHeight,
        kod: 1234567890123,
        versja: "-",
    }

    componentDidMount() {
        window.addEventListener('resize', () => (  
            this.setState( {windowSizeW: window.innerWidth, windowSizeH: window.innerHeight} )   
        ));
    }

    componentWillUnmount()  {
        window.removeEventListener('resize', {} );
    }

    handleGenerateNumber = (props) => {

        let versja;
        // let arr = Array.from(this.state.kod.toString())
        //let txt = this.state.kod.toString()
        let txt = props.toString()
        //console.log("propsy", props)

        //txt[]

        if(txt.length<14) {
            versja = "-"
        } else if(txt.length === 14) {
            
            let odjemna = Number(txt[11])
            let v1 = Number(txt[3])
            if(odjemna<=v1) {
                v1 = v1 - odjemna
            } else {
                v1 += 10;
                v1 = v1 - odjemna
            }

            let v2 = Number(txt[6])
            if(odjemna<=v2) {
                v2 = v2 - odjemna
            } else {
                v2 += 10;
                v2 = v2 - odjemna
            }

            let v3 = Number(txt[9])
            if(odjemna<=v3) {
                v3 -= odjemna
            } else {
                v3 += 10;
                v3 -= odjemna
            }
            
            versja = `b${v1}.${v2}.${v3}`
        } else {
            versja = "Za dużo cyfr"
        }

        this.setState({
            versja
        })

    }

    handleChangeValue = (e) => {
        console.log("Wykonalo sie")

        this.handleGenerateNumber(e.target.value)

        this.setState({
            kod: e.target.value
        })
    }

    render() { 

        return ( 
            <>
                <h3>Panel admina - dzień dobry</h3>
                <br/> Szerokość ekranu: {this.state.windowSizeW}
                <br/> Wysokość ekranu:  {this.state.windowSizeH}
                <br/>
                <label style={{margin: "20px 0 0 10px", }}>
                    <input type="number" value={this.state.kod} onChange={this.handleChangeValue}/>
                    {/* <input type="button" onClick={this.handleGenerateNumber} value="Odczytaj numer"/>  */}
                    <div className="wersja-programu">Versja: {this.state.versja}</div>
                </label>

            </>
        );
    }
}
 




export default AdminPage;