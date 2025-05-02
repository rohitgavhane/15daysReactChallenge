import React, { useEffect, useState } from 'react'

function Pagination() {
    const [products, setproducts] = useState([]);
    const [pages, setpages] = useState(1);

    const fectdata = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        if (data && data.products) {
            setproducts(data.products)

        }
    }
    useEffect(() => {
        fectdata();
    }, []);


const clickHnadler = (selectedpage)=>{
setpages(selectedpage )
}

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                padding: '20px'
            }}
        >

            
            {products.slice(pages * 10 - 10, pages * 10).map((prod) => {
                return (
                    <div
                        key={prod.id}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            borderRadius: '8px',
                            width: '300px',
                            textAlign: 'center',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '10px',
                            }}
                        >
                            {prod.title}
                        </h1>
                        <img
                            src={prod.thumbnail}
                            alt="product-thumbnail"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '5px',
                            }}
                        />
                    </div>
                );

             
            })}
               {products.length>0&&(
                    <div className="pagination" style={{marginTop :'120%', display:'flex', alignItems:'center', padding:'20px', }}>
                    <span onClick={()=>{clickHnadler(pages -1)}}>◀</span>
                    {[...Array(products.length / 10)].map((_,i)=>{
                        return <span key={i} onClick={()=>{clickHnadler(i+1)}}  style={{padding:'20px',borderRadius:'2px solid', cursor:'pointer'}}>{i+1}</span>
                    })}
                    <span onClick={()=>{clickHnadler(pages+1)}}>▶</span>

                    </div>
                )}
        </div>
    );
}

export default Pagination