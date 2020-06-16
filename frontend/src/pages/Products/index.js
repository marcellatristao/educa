import React, { Component } from 'react';
import { 
  Container, 
  Table,
  Button
} from 'reactstrap';

export default class Products extends Component {

    
    lsUsersKey = 'products';

    constructor(props) {
        super(props);
        this.state = { // products array
            products: []
        }
    }

    // function to get products (storage)
    componentDidMount() { 
        const products = JSON.parse(localStorage.getItem(this.lsUsersKey));
        if (products !== null) {
            this.setState({
                products
            });
        }
    }

    // function to remove products
    productRemove = (e) => {
        let products = this.state.products;
        products.splice(e, 1);
        this.setState({
            products: products
        });

        localStorage.setItem(this.lsUsersKey, JSON.stringify(this.state.products));
    }

    render(){

        return (
        <>
            <Container className="mt-3">
                <h5>Disciplinas</h5>
                {
                <Table class="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome da Disciplina</th>
                            <th>Carga Horária</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {

                            
                            this.state.products.map((product, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{product}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                }

                {
                <Table class="table">
                    {/* <thead>
                        <tr>
                            <th>000001</th>
                            <th>Nome_disciplina</th>
                            <th>4h</th>
                            <th>Ações</th>
                        </tr>
                    </thead> */}
    
                    <tbody>
                        {
                            this.state.products.map((product, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{product}</td>
                                    <td>
                                        <Button onClick={()=>this.productRemove(i)} color="danger">Remover</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                }
            </Container>
        </>
        );
    }
    }