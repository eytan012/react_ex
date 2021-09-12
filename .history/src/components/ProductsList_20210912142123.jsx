import React from 'react';

const ProductsList = ({ products, setProducts }) => {
    return (
        <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-5 g-3">
                {products ? (
                        products.map((product)=>{
                            return (
                                <div className="col">
                                    <div className="card h-10">
                                        <img src={product.imgUrl}  alt="product_image" className="card-img-top"/>
                                        <div className="card-body">
                                            <div className="clearfix mb-3">
                                                <span className="float-start badge rounded-pill bg-primary">{product.brand}</span>
                                                <span className="float-end price-hp">{product.price}</span>
                                            </div>
                                            <h5 className="card-title">{product.name}</h5>
                                            <div className="editAddButtons my-4 ">
                                            <span><i class="far fa-edit"></i></span>
                                            <span>|</span>
                                            <span ><i class="fas fa-trash-al"></i></span>

                                                 </div>
                                        </div>
                                        </div>
                                    </div>
                            )
                        })
                ) : "Sorry, no products.."}

            </div>
        </div>
    )
};

export default ProductsList;