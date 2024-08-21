import {GifGridItem} from "./GifGridItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2> Loading...</h2>)
            }

            <div className={'card-grid'}>
                {
                    images.map((image) => (
                        <GifGridItem
                            key={ image.id }
                            { ...image }
                            // title={ image.title }
                            // url={ image.url }
                        />
                    ))
                }
            </div>

        </>
    )
}
