import React,{Component} from'react'
import Card from'./doctors';

class cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <card/>
                    </div>
                    <div className="col-md-4">
                    <card/>
                    </div>
                    <div className="col-md-4">
                    <card/>
                    </div>
                </div>
            </div>
        )
    }
}