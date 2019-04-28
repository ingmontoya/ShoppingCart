import React from 'react';
import axios from 'axios';

class ShopItem extends React.Component {
    constructor(props) {
        super(props);
            this.state= {
               show: false, 
               incart:''
            }
            this.onChangeInCart=this.onChangeInCart.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeInCart(e) {
        this.setState({
            incart: e.target.value
        });
    }
    deleteRow(){   
        var row = document.getElementById("row"+this.props.product._id);
        row.parentNode.removeChild(row);
    }
    checkHost(){
        var host = document.location.hostname;
        var apiurl='';
        if(host==="localhost") 
             apiurl="http://localhost:8000" 
        else
             apiurl="https://condorshopping.herokuapp.com";
        return apiurl
      }
                
    onSubmit(e) {
        e.preventDefault();
        const incartObj=document.getElementById(this.props.product._id).value;
        axios.post(this.checkHost()+'/product/update/'+incartObj+'/'+document.getElementById('delete').value)
            .then(res=>
                this.deleteRow())
            .catch(function(err){
                console.log("Error aquí en el post de products"+err)
            })
        
    }
    render() {
        return (
        <>
            <tr id={"row"+this.props.product._id}>
            <th scope="row">{this.props.key}</th>
            <td>{this.props.product.productname}</td>
            <td>{this.props.product.productprice}</td>
            <td></td>
            <td className="text-center">
            <form onSubmit={this.onSubmit}>
               <input type="hidden" id="delete" value="false"/>
               <button className="btn btn-primary" id={this.props.product._id} value={this.props.product._id}><i className="fa fa-trash"></i></button>
            </form>
            </td>
            </tr>
        </>
        );
    }
}

export default ShopItem
