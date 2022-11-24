import React, { useEffect, useState } from 'react';
import Iphone from '../../Iphone/Iphone/Iphone';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('phone.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            {
                categories.map((category, i) => console.log(category))
            }
        </div>
    );
};

export default Categories;