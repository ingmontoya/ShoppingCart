import React from 'react'

class Hero extends React.Component{
    render(){
        return(
            <section className="hero-image">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="hero-copy">Welcome to our lovely <br/>developer store </h1>
                        <button type="button" className="btn btn-hero">Go to store</button>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Hero