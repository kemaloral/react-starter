import * as React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';

class page2 extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            sort: 1
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/db").then(data => {
            return data.json();
        }).then(data => {
            this.setState({ Data: data });
        });
    }

    sortData(sortColumn) {
        const { Data, sort } = this.state;
        Data.sort(function (a, b) {
            if (a[sortColumn] < b[sortColumn])
                return sort;
            if (a[sortColumn] > b[sortColumn])
                return -1 * sort;
            return 0;
        })
        this.setState({ Data: Data, sort: -1 * sort });
    }

    render() {
        return <div>
            <Table striped size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th><a onClick={this.sortData.bind(this, "Name")}>Name</a></th>
                        <th><a onClick={this.sortData.bind(this, "Telephone")}>Telephone</a></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.Data.map((item, index) => {
                            return <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>
                                    {
                                        item.isEdit == true ?
                                            <Input bsSize="sm" value={item.Name} onChange={(event) => { item.Name = event.target.value; this.setState({}); }} />
                                            : item.Name
                                    }
                                </td>
                                <td>
                                    {
                                        item.isEdit == true ?
                                            <Input bsSize="sm" value={item.Telephone} onChange={(event) => { item.Telephone = event.target.value; this.setState({}); }} />
                                            : item.Telephone
                                    }
                                </td>
                                <td><a className="btn btn-primary btn-sm" onClick={() => {
                                    item.isEdit = !item.isEdit;
                                    this.setState({});
                                }}>{item.isEdit == true ? "Save" : "Edit"}</a></td>
                            </tr>
                        })
                    }

                </tbody>
            </Table>
        </div>
    }
}

export default page2