import React from "react"

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark top-bar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">
                        <img className="logo" src="images/logo-dark.svg" alt="Condor Labs logo" />
                        <img className="logo" src="/images/logo-text-dark.svg" alt="Condor Labs logo" />
                    </a>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact us</a>
                    </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control  search" type="search" placeholder=" " aria-label="Search" />
                    <button className="btn  my-2 my-sm-0" type="submit"><i className="fa fa-search"></i> </button>
                </form>
                <ul className="navbar-nav pr-2 ml-2 mt-2 mt-lg-0">
                    <li className="mr-2"><a href="#" id="cart" className="text-dark"><i className="fa fa-user"></i> </a></li>
                    <li><a href="#" id="cart" className="text-dark"><i className="fa fa-shopping-cart"></i> <span className="cart-badge">3</span></a></li>
                </ul> 
            </nav>
        )
    }
}

export default Header
