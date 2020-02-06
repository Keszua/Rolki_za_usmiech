import React from 'react';

import {Prompt} from 'react-router-dom';

class ContactPage extends React.Component {
    state = {
        value: "",
    }    

    handleSubmit = (e) => {
        e.preventDefault() //żeby się nie wysyłało przez HTML
        this.setState({
            value: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return(
            <div className="contact">
                <form onSubmit={this.handleSubmit}> {/* żeby się nie wysyłało przez HTML*/}
                    <h3>Napisz do nas</h3>
                    <textarea value={this.state.value}
                      onChange={this.handleChange}
                      placeholder="Wpisz wiadomość..."></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt /* Warunek sprawdzany, przy prubie zmiany strony. Gdy warunek jest spełniony, blokuje zmianę strony */
                    when={ this.state.value ? true : false }
                    message="W formularzu znajduje się nie wysłana treść. Czy na pewno chesz opuścić tą stronę"
                />
            </div>
            

        );
    }
}

export default ContactPage;