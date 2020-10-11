import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);


    // const handleAddCategory = () => {
    //     //setCategories(['Code Geass', ...categories]);
    //     setCategories(categories => ['Code Geass', ...categories]);
    // }
    // console.log(categories)

    return (
        <>
            <h2 className='animate__animated animate__bounce'>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/> 
            <hr></hr>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
