import React from "react"
import {NavLink} from 'react-router-dom'

class Header extends React.Component{
    constructor(props){
        super(props);
            this.state= {
               searchValue:''
            }
    }
    Handlefind = (e) =>{
        e.preventDefault();

       const searchForm = this.state 
       this.props.dataSearch(searchForm);
 
      
      

      //reinicar formulario
      this.setState({
        searchValue:''
      })
        
    }

    HandleSearch = (e) =>{
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark top-bar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">
                        <img className="logo" src="/images/logo-dark.svg" alt="Condor Labs logo" />
                        <img className="logo" src="/images/logo-text-dark.svg" alt="Condor Labs logo" />
                    </a>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/contact">Contact us</NavLink>
                    </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.Handlefind}>
                    <input className="form-control  search" type="search" placeholder=" " aria-label="Search" onChange={this.HandleSearch} value={this.state.searchValue} name="searchValue"/>
                    <button className="btn  my-2 my-sm-0" type="submit"><i className="fa fa-search"></i> </button>
                </form>
                <ul className="navbar-nav pr-2 ml-2 mt-2 mt-lg-0">
                    <li className="mr-2"><a href="/" id="cart" className="text-dark"><i className="fa fa-user"></i> </a></li>
                    <li><a href="/" id="cart" className="text-dark"><i className="fa fa-shopping-cart"></i> <span className="cart-badge">3</span></a></li>
                </ul> 
            </nav>
        )
    }
}

export default Header
