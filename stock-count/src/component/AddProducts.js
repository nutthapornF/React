import {
  Form,
  Button,
  Table,
  InputGroup,
  SplitButton,
  Dropdown,
} from "react-bootstrap";
import styled from "@emotion/styled";
import { createRef, useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState([]);
  const incIndex = createRef();

  const addtoInvetoryHandler = (event) => {
    event.preventDefault();
    const formData = event.target;
    const newProduct = {
      product_name: formData.product_name.value,
      price: formData.price.value,
      qty: Number(formData.qty.value),
      date: formData.date.value,
    };

    setProduct([...product, newProduct]);
    console.log(product);
  };

  const increQty = (event) => {
    const IndexOfArr = event.target.value;
    product[IndexOfArr].qty = product[IndexOfArr].qty + 1;
    setProduct([...product]);
  };
  const decreQty = (event) => {
    const IndexOfArr = event.target.value;
    product[IndexOfArr].qty = product[IndexOfArr].qty - 1;
    setProduct([...product]);
  };

  return (
    <Div>
      <Form onSubmit={addtoInvetoryHandler}>
        <Form.Group className="mb-3" controlId="formBasicProductName">
          <Form.Label>Product Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product name"
            name="product_name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price :</Form.Label>
          <Form.Control type="number" placeholder="Price" name="price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>Quantity :</Form.Label>
          <Form.Control type="number" placeholder="how many" name="qty" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>Date :</Form.Label>
          <Form.Control type="date" placeholder="date" name="date" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Add To Inventory
        </Button>
      </Form>
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Options</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>
                  <Button
                    onClick={(event) => increQty(event)}
                    value={index}
                    variant="info">
                    +
                  </Button>
                  <Button
                    onClick={(event) => decreQty(event)}
                    value={index}
                    variant="info">
                    -
                  </Button>
                </td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Div>
  );
}
export default AddProduct;

const Div = styled.div`
  width: 600px;
`;
