import './App.css';
import React from 'react';

function ImagePreview() {
    const [url, setUrl] = React.useState();
    return <>
        <label className="wrapper" htmlFor="input">
            {url? (
                <img src={url} alt="" width="400" height="200" />
            ) : (
                <div className="description">Choose file</div>
            )}
        <input
            type="file"
            accept="image/*"
            style={{display: "none"}}
            id="input"
            onChange={e =>{
                const file = e.target.files[0];
                if(file){
                    const objectUrl = URL.createObjectURL(file);
                    setUrl(objectUrl);
                }
            }}>
        </input>
        </label>
        
    </>
}

export default ImagePreview; 