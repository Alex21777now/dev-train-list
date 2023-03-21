import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import UsersData from './UsersData';
import users from './Users';
import products from './Products';
import {BootstrapTable,
  TableHeaderColumn} from 'react-bootstrap-table';
import Table from 'react-table';
import styled from 'styled-components';
import mockProductsVar from "./Products";

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
  background-color: lightgreen;
}
`

function App() {
 
    
    const [productsVar, setProductsVar] = useState (mockProductsVar);
    const [productToEdit, setProductToEdit] = useState (null);


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


    return (
        <div className="products-page">
        { productToEdit && (


<Styles>
      <form class="row g-3">
      <h3><strong>Form</strong><br/><br/>(edit a <strong>Product</strong>)</h3>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Title</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder={productToEdit.title} value={productToEdit.title} onChange={(e) => handleProductTitleChange(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Description</label>
    <input type="text" class="form-control" id="inputPassword4" placeholder={productToEdit.description} value={productToEdit.description} onChange={(e) => handleProductDescriptionChange(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Price</label>
    <input type="text" class="form-control" id="inputAddress" placeholder={productToEdit.price} value={productToEdit.price} onChange={(e) => handleProductPriceChange(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">DiscountPercentage</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder={productToEdit.discountPercentage} value={productToEdit.discountPercentage} onChange={(e) => handleProductDiscountPercentageChange(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Rating</label>
    <input type="text" class="form-control" id="inputCity" placeholder={productToEdit.rating} value={productToEdit.rating} onChange={(e) => handleProductRatingChange(e.target.value)}/>
  </div>
  <p></p>
 
<div class="col-md-6">
    <label for="inputEmail4" class="form-label">Stock</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder={productToEdit.stock} value={productToEdit.stock} onChange={(e) => handleProductStockChange(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Brand</label>
    <input type="text" class="form-control" id="inputPassword4" placeholder={productToEdit.brand} value={productToEdit.brand} onChange={(e) => handleProductBrandChange(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Category</label>
    <input type="text" class="form-control" id="inputAddress" placeholder={productToEdit.category} value={productToEdit.category} onChange={(e) => handleProductCategoryChange(e.target.value)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Thumbnail</label>
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
    <button type="submit" class="btn btn-primary" onClick={() => handleUpdate()}>UPDATE a Product</button>    <button class="btn btn-outline-danger" onClick={()=> setProductToEdit(null)}>Cancel</button>
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
          <h3><strong>Products</strong></h3>
      
    
      <div>



<Styles>
      
<table class="table table-striped">

<thead>
  <tr>
    <th></th>
    <th>Title</th>
    <th>Description</th>
    <th>Price</th>
    <th>DiscountPercentage</th>
    <th>Rating</th>
    <th>Stock</th>
    <th>Brand</th>
    <th>Category</th>
    <th>Thumbnail</th>
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
      <td><button onClick={() => setProductToEdit(dat1)}><strong>Edit</strong></button></td>

      </tr>       
 ))

}
</tbody>    

</table>


</Styles>

      </div>

      </div>
      </div>
    );
    }
  
  export default App;
