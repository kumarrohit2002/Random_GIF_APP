import Reeat,{ useEffect, useState } from 'react';
import axios from 'axios';

const api_key=process.env.key;

const useGif = (tag) =>{
    const [gif,setGif]=useState('');
    const [loader,setLoader]=useState(false);

    async function fetchData(tag){
        const url=`https://api.giphy.com/v1/gifs/random?api_key=ukaCOkbWedDGBy2937CgfhWHdIcfmiKm`;
        try{
            setLoader(true);
            const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
            const imgSource=data.data.images.downsized_large.url;
            setGif(imgSource);
            setLoader(false);
        }catch(error){
            alert('Error: api not fatch');
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
    return {gif,loader,fetchData};
}

export default useGif;