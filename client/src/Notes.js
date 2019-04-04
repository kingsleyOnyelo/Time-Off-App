import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './note.css';



let noteItems = [];
if(noteItems === null){
    noteItems = [];
}



//import noteIcon from './img/noteIcon.svg';
class Notes extends React.Component{

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleContent = this.handleContent.bind(this);

        this.state = {
            noteTitle : "",
            noteContent : "",
            noteList: [],
            logo:"Fancy Note",
            isInEditMode: false,

            titleError: "",
            contentText:"",
            showData: "",
            butt:null,
        }
    }

   


    handleEdit = ()=>{
        this.setState({isInEditMode: !this.state.isInEditMode});
        console.log("I have been double clicked");
    }

    

    handleContent(event){
        let contentText = event.target.value;
        this.setState({noteContent: contentText});
        this.setState({butt: <button type="button" data-dismiss={this.state.showData} 
       className="btn btn-primary" onClick={this.handleClick}>Save</button>});
       this.setState({showData: "modal"});
    }
    


    handleChange(event){
        let noteTitle = event.target.value;
        this.setState({noteTitle: noteTitle});
    }

    handleClick(event){
        event.preventDefault();
        let title = this.state.noteTitle;
        let cont = this.state.noteContent;
        if(title === "" || cont ===""){
            this.setState({titleError: "please enter a value"})
            this.setState({contentText: "please enter a value"})
            this.setState({showData:""})
        }else{

       noteItems.push({id: noteItems.length + 1, noteTitle: this.state.noteTitle, noteContent: this.state.noteContent});
       this.setState({noteList:noteItems});

       this.setState({noteTitle: ""});
       this.setState({noteContent: ""});
       this.setState({titleError: ""});
       this.setState({contentText: ""});
       

       
       console.log(localStorage.setItem("noteItems",JSON.stringify(noteItems)));

       //localStorage.setItem()
    }
    
   
    }
    

    render(){
        
            
        return(
            <div>
                <div className="container2">
                <nav className="navbar navbar-custom">
                {this.state.isInEditMode ? <p><input 
                type="text"
                defaultValue={this.state.logo}/></p>:
                <p className="navbar-brand customName" >{this.state.logo}</p>}
                <p onDoubleClick={this.handleEdit}>Okay</p>
            <button className="btn btn-outline-success find" type="submit" data-toggle="modal" data-target="#exampleModal">New Note</button>
            </nav>
            <div>
                <div className="row">
                
                {
                    noteItems.map((item, id) => {
                        return <div className="cardName" key={id}>
                            <h6 style={{color:"white"}}>{item.noteTitle}</h6>
                            <div className="noteCon">
                            <p style={{color:"black"}}>{item.noteContent} <i className="fa fa-edit"  style={{color:"black",float:"right",fontSize: "25px", cursor:"pointer"}} onClick={this.handleEdit}></i></p>
                            
                            </div>

                           </div>
                     })
                }
                </div>
            </div>
           
            </div>


<div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <input type="text" className="modal-title" id="exampleModalLabel" value = {this.state.noteTitle} placeholder="Note Title" onChange={this.handleChange}></input><br/>
        <small>{this.state.titleError}</small>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <textarea rows="3" onChange={this.handleContent} value = {this.state.noteContent}></textarea><br/>
      <small>{this.state.contentText}</small>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        
        {this.state.butt}
        
      </div>
    </div>
  </div>
</div>






            </div>
        )
    }
}

export default Notes;