import React from 'react'
import { Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import {BiShoppingBag} from 'react-icons/bi';

const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <a href='/'>Shopping Cart</a>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl 
                    placeholder='search product...'
                    style={{width:500}}
                    className='m-auto'
                />
            </Navbar.Text>
            <Nav>
                <Dropdown align='end'>
                    <Dropdown.Toggle variant="success" className='d-flex align-items-center gap-3'>
                        <BiShoppingBag color='white' size={33} />
                        <span className='bg-success fs-4'>0</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: 370}}>
                        <span style={{padding: 10}}>Cart is Empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header;