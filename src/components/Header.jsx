import React, { Fragment } from 'react'
import { Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import {BiShoppingBag} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
    const {state: {cart}, dispatch, productDispatch} = CartState();
  return (
    <Navbar bg="dark" variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl 
                    placeholder='search product...'
                    style={{width:500}}
                    className='m-auto'
                    onChange={(e) => {
                        productDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value,
                        });
                    }}
                />
            </Navbar.Text>
            <Nav>
                <Dropdown align='end'>
                    <Dropdown.Toggle variant="success" className='d-flex align-items-center gap-3'>
                        <BiShoppingBag color='white' size={26} />
                        <span className='bg-transparent fs-5'>{cart.length}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: 370}}>
                    {
                        cart.length>0 ?
                        (
                            <Fragment>
                                {
                                    cart.map(product => (
                                        <span className='cartitem' key={product.id}>
                                            <img
                                                src={product.image}
                                                className="cartItemImg"
                                                alt={product.name}
                                            />
                                            <div className='cartItemDetail'>
                                                <span>{product.name}</span>
                                                <span>₹ {product.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete
                                                size={20}
                                                style={{cursor: "pointer"}}
                                                onClick={() => dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: product,
                                                })}
                                            />
                                        </span>
                                    ))
                                }
                                <Link to='/cart'>
                                    <Button style={{width: "95%", margin: "0 10px"}}>
                                        Go To Cart
                                    </Button>
                                </Link>
                            </Fragment>
                        ) :
                        (<span style={{padding: 10}}>Cart is Empty!</span>)
                    }
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header;