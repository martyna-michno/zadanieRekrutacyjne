import React from 'react'
import Loader from "react-loader-spinner";

export const ShowLoader = () => {
    return (
        <div className="loader">
            <Loader
                type="Oval"
                color="rgb(81, 163, 235)"
                height={150}
                width={150}
                timeout={0}
            />
        </div>
    )
}

export default Loader