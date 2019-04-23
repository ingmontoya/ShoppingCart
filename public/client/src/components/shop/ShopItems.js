import React from 'react'

class ShopItem extends React.Component{
    constructor(){
        super();
        this.state = {
            character:{}
        }
    }
    componentDidMount() {
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => this.setState({
                character:data
            }))
    }
    render(){
        return(
            <div className="card">
                    <img className="card-img-top" src="https://via.placeholder.com/280x180" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.character.name}</h5>
                            <p className="card-text">$100</p>
                            <a href="/" className="btn btn-primary">Go</a>
                        </div>
            </div>
        )
    }
}

export default ShopItem