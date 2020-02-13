import React, { Component } from 'react'
import Tablecrud from '../../src/Tablecrud/Tablecrud'
import axios from 'axios'

class HomeComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
             res: []
        }
    }

    getPostAPI(){
        axios.get(`http://localhost:3002/posts`)
        .then( result => {
            // console.log(result)
            this.setState({
                res : result.data
            })
        }).catch((err) => {
            console.log(err)
        });
    }
    


    remove= data =>{
        console.log(data.id)
       axios.delete(`http://localhost:3002/posts/${data}`)
       .then((res)=>{
           this.getPostAPI(res)
       }).catch((err)=>{
           console.log(err)
       })
       console.log("remove")
    }

    componentDidMount(){
        this.getPostAPI()
    }
    

    render() {
        return (
            <div>
                <Tablecrud  dataTable={this.state.res} remove={this.remove}/>
            </div>
        )   
    }
}

export default HomeComp
