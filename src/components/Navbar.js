import React from 'react'
import {Container, Row} from "react-bootstrap"
import { Link } from 'react-router-dom'
import img1 from "../imgs/vsvv2o.png"
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useSelector } from 'react-redux'



const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
     backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     marginLeft: theme.spacing(1),
     width: '202px',
   },
 }));
 
 const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
 }));
 const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
     padding: theme.spacing(1, 1, 1, 0),
     // vertical padding + font size from searchIcon
     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
     transition: theme.transitions.create('width'),
     width: '100%',
     [theme.breakpoints.up('sm')]: {
       width: '12ch',
       '&:focus': {
         width: '20ch',
       },
     },
   },
 }));

export default function Navbar(props) {
  const cart = useSelector(state => state.cart)
   const handleSearch = (event) => {
      props.onSearch(event.target.value);
    }
  return (
    <>
       <div className='navbar py-3 position-fixed w-100' style={{zIndex:"9999",backgroundColor: "rgb(231 236 238)"}}>
          <Container>
             <div className='parent d-flex justify-content-space-between w-100 align-items-center'>
                <div className='col'>
                   <Link to="/"><img style={{height:"45px"}} alt="" src={img1}/></Link>
                </div>
                <div className='col text-end'>
                <Row className='align-items-center'>
                   <div className='col-12 col-sm-10 d-flex justify-content-end'>
                   <Search>
                   <SearchIconWrapper>
                     
                   </SearchIconWrapper>
                   <StyledInputBase
                     placeholder="Search…"
                     inputProps={{ 'aria-label': 'search' }}
                     onChange={handleSearch}
                   />
                 </Search>
                   </div>
                   <div className='col-12 col-sm-2'>
                   <Link className='nav-link' to="/cart"><i class="fa-solid fa-bag-shopping fs-2"></i><h6>{cart.length}</h6></Link>
                   </div>
                </Row>
                </div>
             </div>
          </Container>
       </div>
    </>
  )
}
