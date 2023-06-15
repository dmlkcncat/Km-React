import React from 'react';

const ImageWithContent = ({ src, alt, children }) => {
    return (
        <div>
            <img src={src} alt={alt} />
            {children}
        </div>
    );
};

export default ImageWithContent;