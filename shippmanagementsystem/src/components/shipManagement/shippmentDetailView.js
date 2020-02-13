import React,{Component} from 'react';
import { MDBBtn,MDBInput,MDBIcon } from 'mdbreact';
import { connect } from 'react-redux';
import {fetchShippmentInDetail, updateShippmentDetails} from '../../actions/index' ;

class ShippmentDetailView extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShippmentUpdation : false,
            updatedShippmentName : '',
            disableUpdateDetail : true
        }    
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = () => { 
        this.props.dispatch(fetchShippmentInDetail(this.props.match.params.id));
           
    }

    handleBackToListPage = () => {
        this.props.history.push('/shippmentDetails');
    }

    handleUpdateShipmentNameDetail = () => {
        this.setState({isShippmentUpdation: true});
    }

    handleChange(event) {
        event.persist();
        event.target.value ? this.setState({
            updatedShippmentName: event.target.value,
            disableUpdateDetail: false
        }) : this.setState({
            updatedShippmentName: '',
            disableUpdateDetail: true
        })

    }

    handleUpdateShippmentDetails = () => {
        this.props.selectedShippmentDetail[0].name = this.state.updatedShippmentName;
        this.props.dispatch(updateShippmentDetails(this.props.selectedShippmentDetail[0].id,this.props.selectedShippmentDetail[0]))
        this.setState({isShippmentUpdation: false});

    }

     // Adding Styles
    shippmentInfo_Header = {
        float : 'left',
        width: '18%'
    }
    
    shippmentInfo_Container = {
        margin: 'auto',
        width: '70%',
    }

    shippmentInfo_HeaderLabel = {
        fontsize: '20px',
        margin: '10px 0'
    }    

    shippmentInfo_NameFieldUpdate = {
        padding : '10px 0',
        width : '25%'
    }

    shippmentInfo_NameIcon = {
        cursor: 'pointer'
    }
      

    render() {
        const isShippmentUpdation = this.state.isShippmentUpdation;
        return(
            <div>
            <div style= {this.shippmentInfo_Container}>
            <label className="grey-text" style= {this.shippmentInfo_HeaderLabel}> Shippment Information : </label> <br></br>
              <label className="grey-text" style= {this.shippmentInfo_Header}>
                    Shippment ID : 
              </label>
              {this.props.selectedShippmentDetail.map(shippmentItem => <div className="grey-text" key={shippmentItem.id}>{shippmentItem.id}</div>)}<br></br>
              <label className="grey-text"  style= {this.shippmentInfo_Header} >
                    Shippment Name : 
              </label>  
              { !isShippmentUpdation ? ( 
              <div>         
              {this.props.selectedShippmentDetail.map(shippmentItem =><div className="grey-text" key={shippmentItem.id}>{shippmentItem.name} <MDBIcon icon="edit" title="click to edit shippment name" style={this.shippmentInfo_NameIcon} onClick={() => this.handleUpdateShipmentNameDetail()} /></div>)}<br></br>
              </div>
              ) : (
                <div style={this.shippmentInfo_NameFieldUpdate}>
                {this.props.selectedShippmentDetail.map(shippmentItem =>
                    <div key={shippmentItem.id}> 
                        <MDBInput  label="Enter New Shippment Name" value={this.state.updatedShippmentName} onChange={this.handleChange}/>
                    </div>                    
              )}
              </div>
              )}
              <label className="grey-text"  style= {this.shippmentInfo_Header}>
                    Shippment Mode : 
              </label>
              {this.props.selectedShippmentDetail.map(shippmentItem => <div className="grey-text"  key={shippmentItem.id}>{shippmentItem.mode}</div>)}<br></br>
              <label className="grey-text"  style= {this.shippmentInfo_Header}>
                    Shippment Type : 
              </label>
              {this.props.selectedShippmentDetail.map(shippmentItem => <div className="grey-text"  key={shippmentItem.id}>{shippmentItem.type}</div>)}<br></br>
              <label className="grey-text"  style= {this.shippmentInfo_Header}>
                    Shippment Status : 
              </label>
              {this.props.selectedShippmentDetail.map(shippmentItem => <div className="grey-text"  key={shippmentItem.id}>{shippmentItem.status}</div>)}<br></br>
              <label className="grey-text"  style= {this.shippmentInfo_Header}>
                    Shippment Origin : 
              </label>
              {this.props.selectedShippmentDetail.map(shippmentItem => <div className="grey-text"  key={shippmentItem.id}>{shippmentItem.origin}</div>)}<br></br>
              <label className="grey-text"  style= {this.shippmentInfo_Header}>
                    Shippment Destination : 
              </label>
              {this.props.selectedShippmentDetail.map(shippmentItem => <div className="grey-text"  key={shippmentItem.id}>{shippmentItem.destination}</div>)}<br></br>
              <MDBBtn rounded outline color="elegant" size="sm" onClick={() => this.handleBackToListPage()}>back</MDBBtn>
              <MDBBtn rounded outline color="elegant" size="sm" disabled = {this.state.disableUpdateDetail} onClick={() => this.handleUpdateShippmentDetails()}>Update</MDBBtn>
            </div>   
           
                
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    state.shift();
    return {
        selectedShippmentDetail : state
    }
}

export default connect(mapStateToProps)(ShippmentDetailView);