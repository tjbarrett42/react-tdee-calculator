import React from 'react';

class SearchBar extends React.Component {
    state = { weight: "" };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.weight)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Weight</label>
                        <input type="number" value={this.state.weight}
                               onChange={(e) => this.setState({weight: e.target.value})}/>
                               {/* TODO: control for positive numbers only*/}
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;