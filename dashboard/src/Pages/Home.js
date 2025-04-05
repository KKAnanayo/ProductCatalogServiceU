import React, { useState, useEffect } from 'react';
import '../CSS/Home.css'; // Import Home-specific CSS

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State for the search query
    const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        // Filter products based on the search query
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchQuery, products]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://localhost:7264/api/Products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            console.log("Fetched products:", data);
            setProducts(data);
            setFilteredProducts(data); // Initialize filtered products
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update the search query
    };

    return (
        <div>
            <h3>Product List</h3>
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product, index) => (
                        <tr key={product.id || index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td>
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
