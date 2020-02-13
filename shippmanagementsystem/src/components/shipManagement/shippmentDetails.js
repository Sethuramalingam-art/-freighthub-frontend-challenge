import React,{Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import {fetchAllShippmentDetails} from '../../actions/index'
class ShippmentDetails extends  React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {   
        this.props.dispatch(fetchAllShippmentDetails());        
    }

    render() {
        return (
            <MDBDataTable
            striped
            bordered
            small
            entries = {this.props.listCount}
            responsive = {true}
            data={this.props.shippmentDetailsList}
          />
          )
    }
}

const mapStateToProps = (state, ownProps) => {
    const data = {
        columns: [
          {
            label: 'ShippmentId',
            field: 'id',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 250
          },
          {
            label: 'Type',
            field: 'type',
            sort: 'asc',
            width: 200,
          },
          {
            label: 'Destination',
            field: 'destination',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Origin',
            field: 'origin',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Mode',
            field: 'mode',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Total',
            field: 'total',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Status',
            field: 'status',
            sort: 'asc',
            width: 100
          },
          {
            label: 'UserID',
            field: 'userId',
            sort: 'asc',
            width: 100
          }
        ],
        rows : []
    }

//   state.forEach((shippingItem) => {
    Object.values(state).forEach(function(shippingItem, index) {
        const rowData = {
            id : shippingItem.id,
            name : shippingItem.name,
            type : shippingItem.type,
            destination : shippingItem.destination,
            origin : shippingItem.origin,
            mode : shippingItem.mode,
            total : shippingItem.total,
            status : shippingItem.status,
            userId : shippingItem.userId,
            clickEvent: () => {
               redirectToViewPage(rowData)
            }
        }

        data.rows.push(rowData);
     })


    const redirectToViewPage = (rowData) => {
        ownProps.history.push('/shippmentDetailView/' + rowData.id)
    }

    
    return {
        listCount : 20,
        shippmentDetailsList : data
    }
}



export default connect(mapStateToProps)(ShippmentDetails);
