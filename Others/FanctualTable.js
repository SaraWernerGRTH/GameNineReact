import React, { Component } from 'react';
import {Row, Col ,Grid} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export class FanctualTable extends Component {
    products = [{ id: 1, name: "Item name 1",  price: 100 },
     { id: 2, name: "Item name 2", price: 200 },
     { id: 3, name: "Item name 3", price: 300 },
     { id: 4, name: "Item name 4", price: 400 },
     { id: 5, name: "Item name 5", price: 500 },
     { id: 6, name: "Item name 6", price: 600 },
     { id: 7, name: "Item name 7", price: 100 },
     { id: 8, name: "Item name 8", price: 3000 },
     { id: 9, name: "Item name 9", price: 1000 },
     { id: 10, name: "Item name 10", price: 50 }];
    options = {
        exportCSVText: 'my_export',
        insertText: 'my_insert',
        saveText: 'my_save',
        closeText: 'my_close',
        clearSearch: true,
        handleConfirmDeleteRow: this.customConfirm
      };
      customConfirm(next, dropRowKeys) {
        const dropRowKeysStr = dropRowKeys.join(',');
          // If the confirmation is true, call the function that
          // continues the deletion of the record.
          next();
      }
   priceFormatter(cell, row){
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  }
    render() {
        const selectRowProp = {
            mode: 'checkbox'
          };
        return (
            <div className="lists">
               {/* <Grid fluid style={{ lineHeight: '32px' }}>
                    <Row >
                        <Col xs={12} md={8}  className="clr1">a</Col>
                        <Col xs={6} md={4}  className="clr2">b</Col>
                    </Row>
                    <br />
                    <Row >
                        <Col xs={6} md={4}  className="clr1">c</Col>
                        <Col xs={6} md={4}  className="clr2">d</Col>
                        <Col xs={6} md={4}  className="clr3">e</Col>
                    </Row>
                </Grid> */}
                {/* <BootstrapTable data={this.products} striped={true} hover={true}>
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" priceFormatter={this.priceFormatter}>Product Price</TableHeaderColumn>
                </BootstrapTable> */}
                <BootstrapTable data={ this.products }  deleteRow={ true } selectRow={ selectRowProp }  search={ true } multiColumnSearch={ true } options={ this.options } searchPlaceholder='Search delay 500ms'
                    insertRow
                    exportCSV>
                    <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}