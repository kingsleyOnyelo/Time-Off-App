import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


let productList = [];
if(productList === null){
    productList = [];
}



class ReactBasic extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            price:"",
            productItems: [],
            isEdit: false,
        }
    }




handleNameChange = (event)=>{
        let nameState = event.target.value;
        this.setState({name: nameState});
        
}


handlePriceChange = (event)=>{
    let priceState = event.target.value;
    this.setState({price: priceState});
   
}

handleSubmit = (event)=>{
        event.preventDefault();

}

getProducts(){
    let newArray = {id:productList.length + 1, name:this.state.name, price:this.state.price};
    productList.push(newArray);
    localStorage.setItem("products", JSON.stringify(productList));
    let product = JSON.parse(localStorage.getItem("products"));
    this.setState({productItems: product});
}

handleClick = ()=>{
   
    this.getProducts();
    this.setState({name:""});
    this.setState({price:""});
}

    handleEdit = ()=>{
        this.setState({isEdit:!this.state.isEdit});
    }

    handleDelete = (name)=>{
        localStorage.removeItem("products");
        const deleteItems = this.state.productItems.filter(item =>{
            return item.name!== name;
            
        });
        this.setState({productItems: deleteItems})
}





    render(){
        return(
            <div className="container-fluid">
                <h1>CRUD APP</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" 
                    onChange={this.handleNameChange} 
                    value={this.state.name}></input>
                     {`  `}
                    <input type="text" placeholder="price" 
                    onChange={this.handlePriceChange} 
                    value={this.state.price}></input>

                    <button className="btn-primary" 
                    onClick={this.handleClick}>Add item</button>
                </form>
                <br/>

                {
                    this.state.isEdit ? <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" 
                    ></input>
                     {`  `}
                    <input type="text" placeholder="price" 
                    ></input>

                    <button className="btn-primary" 
                    >Save item</button>
                </form>
                :
                null
                }

                <div style={{color:"blue"}}>
                    <ol>
                        
                            {this.state.productItems.map((item,id)=>{
                                return <div key={id}><br/>
                                <li>{item.name} {` `} {item.price} {` `} {` `}

                                <button className="btn-danger" 
                                onClick={()=>this.handleDelete(item.name)}>Delete</button>{` `}{` `}

                                <button className="btn-primary" 
                                onClick={this.handleEdit}>Edit</button>
                                </li>
                                
                                </div>
                            })}
                        
                    </ol>
                </div>

               
            </div>
        )
    }
}

export default ReactBasic;
