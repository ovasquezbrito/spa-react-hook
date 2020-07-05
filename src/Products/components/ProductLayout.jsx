import React from 'react';
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'

//Componente Lista de productos

const ProductLayout = () => {
    
    return ( 
        <div>
            <Header title="App de Productos"></Header>
            <AddButton></AddButton>
            <ListProducts></ListProducts>
        </div>
     );
}
 
export default ProductLayout;