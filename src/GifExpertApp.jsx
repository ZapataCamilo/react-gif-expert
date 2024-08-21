import {useState} from "react";
import {AddCategories, GifGrid} from "./components/";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) {
            alert(`${newCategory} ya existe!`);
            return;
        }

        // categories.push( newCategory );
        setCategories([ newCategory, ...categories ]);
        // setCategories( cats => [ 'Valorant', ...cats ] );
    }
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategories
                onNewCategory={ onAddCategory }
            />

            {
                categories.map( ( category ) => (
                    <GifGrid
                        key={ category }
                        category={ category } />
                ))
            }

        </>
    )
}