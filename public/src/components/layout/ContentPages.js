import React from 'react'

class ContentPage extends React.Component{
    render(){
        return(
            <section className="content">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="container">
                            <div className="row contact-titles">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <h2 className="">Talk to us</h2>
                                <p>Please fill in the form and we will reply to your inquiry very shortly. Please make sure that you enter your full e-mail address (eg. yourname@yourisp.com) Thanks.</p>
                                </div>
                    
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <h2>Write us</h2>
                                <form>
                                    <div className="form-group">
                                        <label for="name">Full name</label>
                                        <input type="text" className="form-control" id="name" aria-describedby="nameHelp"  />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Message</label>
                                        <textarea  className="form-control" id="exampleInputPassword1" placeholder="" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentPage