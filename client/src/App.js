import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import UsersData from './UsersData';
import users from './Users';
import products from './Products';
import {BootstrapTable,
  TableHeaderColumn} from 'react-bootstrap-table';
import Table from 'react-bootstrap/Table';
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button
} from "react-bootstrap";
import styled from 'styled-components';
import mockProductsVar from "./Products";



//import Table from 'react-bootstrap/Table';
//import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';



const Styles = styled.div`
padding: 1rem;

table {
border-spacing: 0;
border: 1px solid black;


tr {
 :last-child {
   td {
     border-bottom: 0;
   }
 }
}

th,
td {
 margin: 0;
 padding: 1rem;
 border-bottom: 1px solid black;
 border-right: 1px solid black;

 :last-child {
   border-right: 0;
 }
}
}

form {
  border-spacing: 0;
  border: 1px solid gray;
  background-color: lightblue;
  text-align: center;
}
`

function App() {
 
  

    const [productsVar, setProductsVar] = useState (mockProductsVar);
    const [productToEdit, setProductToEdit] = useState (null);
    
    
    const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState('');




    const handleProductTitleChange = (title) => {
      setProductToEdit({ ...productToEdit, title });
    }
    const handleProductDescriptionChange = (description) => {
      setProductToEdit({ ...productToEdit, description });
    }
    const handleProductPriceChange = (price) => {
      setProductToEdit({ ...productToEdit, price });
    }
    const handleProductDiscountPercentageChange = (discountPercentage) => {
      setProductToEdit({ ...productToEdit, discountPercentage });
    }
    const handleProductRatingChange = (rating) => {
      setProductToEdit({ ...productToEdit, rating });
    }
    const handleProductStockChange = (stock) => {
      setProductToEdit({ ...productToEdit, stock });
    }
    const handleProductBrandChange = (brand) => {
      setProductToEdit({ ...productToEdit, brand });
    }
    const handleProductCategoryChange = (category) => {
      setProductToEdit({ ...productToEdit, category });
    }
    const handleProductThumbnailChange = (thumbnail) => {
      setProductToEdit({ ...productToEdit, thumbnail });
    }

    
    const handleUpdate = () => {
      const updatedProductsVar = productsVar.map(dat1 => {
        if(dat1.id === productToEdit.id) {
          return productToEdit;
        }
        return dat1;
      })

      setProductsVar(updatedProductsVar);
      setProductToEdit(null);
    }


    const handleUpdate1 = (dat1) => {
      
      dat1.id = null;
      dat1.title = null;
      dat1.description = null;
      dat1.price = null;
      dat1.discountPercentage = null;
      dat1.rating = null;
      dat1.stock = null;
      dat1.brand = null;
      dat1.category = null;
      dat1.thumbnail = null;

      setProductToEdit();
    }


    return (
        <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              /> TRAINS List
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About us </Nav.Link>
                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                <Nav.Link href="/blog"> Blog </Nav.Link>
              </Nav>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
             {/*<Form inline>
                <div className="line">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info mt-4">Search for a TRAIN</Button>
                </div>
                </Form> */}
             
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
        <h1 className='text-center mt-4'>Trains Shedule<br/><h5>quick search</h5><br/><h4>for {new Date().toLocaleString() + ""}</h4></h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search trains'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Train Name</th>
              <th>train №</th>
              <th>time-in-transit</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
          {data
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>


        <div className="products-page">
        { productToEdit && (


<Styles>
      <form class="row g-3">
      <h3><strong>Form</strong><br/><br/>(edit the ------<strong>Train</strong>------ Schedule Details)</h3>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Train Name</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder={productToEdit.title} value={productToEdit.title} onChange={(e) => handleProductTitleChange(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">train №</label>
    <input type="text" class="form-control" id="inputPassword4" placeholder={productToEdit.description} value={productToEdit.description} onChange={(e) => handleProductDescriptionChange(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">DEPATURE Location</label>
    <input type="text" class="form-control" id="inputAddress" placeholder={productToEdit.price} value={productToEdit.price} onChange={(e) => handleProductPriceChange(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">ARRIVE Location</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder={productToEdit.discountPercentage} value={productToEdit.discountPercentage} onChange={(e) => handleProductDiscountPercentageChange(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Time: DEPATURE</label>
    <input type="text" class="form-control" id="inputCity" placeholder={productToEdit.rating} value={productToEdit.rating} onChange={(e) => handleProductRatingChange(e.target.value)}/>
  </div>
  <p></p>
 
<div class="col-md-6">
    <label for="inputEmail4" class="form-label">Time: ARRIVE</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder={productToEdit.stock} value={productToEdit.stock} onChange={(e) => handleProductStockChange(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">time-in-transit</label>
    <input type="text" class="form-control" id="inputPassword4" placeholder={productToEdit.brand} value={productToEdit.brand} onChange={(e) => handleProductBrandChange(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Category</label>
    <input type="text" class="form-control" id="inputAddress" placeholder={productToEdit.category} value={productToEdit.category} onChange={(e) => handleProductCategoryChange(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">FREE /seats/ Remained</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder={productToEdit.thumbnail} value={productToEdit.thumbnail} onChange={(e) => handleProductThumbnailChange(e.target.value)}/>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={() => handleUpdate()}>UPDATE the Train</button>    <button class="btn btn-outline-danger" onClick={()=> setProductToEdit(null)}>Cancel</button>
    <p></p>
  </div>
</form>
</Styles>  



 )}
        <div className="App">
     
       
          <br/>
          <br/>
          <br/>
          <br/>
          <h3><strong>EXTENDED TRAINS</strong>  Schedule<br/><p> </p> for {new Date().toLocaleString() + ""}</h3>
      
    
      <div>



<Styles>
      
<table class="table table-striped">

<thead>
  <tr>
    <th></th>
    <th>Train Name</th>
    <th>train №</th>
    <th>DEPATURE Location</th>
    <th>ARRIVE Location</th>
    <th>Time: DEPATURE</th>
    <th>Time: ARRIVE</th>
    <th>time-in-transit</th>
    <th>Category</th>
    <th>FREE /seats/ Remained </th>
    <th></th>
    <th></th>
  </tr>
 
</thead>



<tbody>

{ 
productsVar.map(dat1 => (
      
  <tr key={dat1.id}>

      <td>{dat1.id}</td>
      <td>{dat1.title}</td>
      <td>{dat1.description}</td>
      <td>{dat1.price}</td>
      <td>{dat1.discountPercentage}</td>
      <td>{dat1.rating}</td>
      <td>{dat1.stock}</td>
      <td>{dat1.brand}</td>
      <td>{dat1.category}</td>
      <td>{dat1.thumbnail}</td>
      <td><button class="btn btn-primary" onClick={() => setProductToEdit(dat1)}>Edit</button></td>
      <td><button class="btn btn-outline-danger" onClick={() => handleUpdate1(dat1)}><strong>Del</strong></button></td>

      </tr>       
 ))

}
</tbody>    

</table>


</Styles>

      </div>

      </div>
      </div>

      </>
    );
    }
  
  export default App;
