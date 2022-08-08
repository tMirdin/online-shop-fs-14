import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './addProduct.css'
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {productContext} from "../../context/ProductContextProvider";

export default function AddProduct() {

    let {addProduct} = useContext(productContext);

    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');

    let navigate = useNavigate();

    function handleClick (){
        let product= {
            productName,
            price,
            photo,
            description
        }

        addProduct(product);
        navigate('/')
    }


    return (
        <div className='addProduct'>
            <TextField sx={{ width: 300 }}
                       id="outlined-basic" label="Product name" variant="outlined"
                       value={productName}
                       onChange={(e) => setProductName(e.target.value)}
            />
            <TextField sx={{ width: 300 }}
                       id="outlined-basic" label="Price" variant="outlined"
                       value={price}
                       onChange={(e) => setPrice(e.target.value)}
            />
            <TextField sx={{ width: 300 }}
                       id="outlined-basic" label="Photo" variant="outlined"
                       value={photo}
                       onChange={(e) => setPhoto(e.target.value)}
            />
            <TextField sx={{ width: 300 }}
                       id="outlined-basic" label="Description" variant="outlined"
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
            />
            <Button onClick={handleClick} variant="contained" disableElevation>
                Add Product
            </Button>
        </div>
    );
}
