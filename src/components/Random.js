import Reeat,{ useEffect, useState } from 'react';
import Loader from './Loader';
import useGif from '../hooks/useGif'

const api_key=process.env.key;

function Random(){

    const {gif,loader,fetchData}=useGif();


    return(
        <div>
            <div className="w-[500px] min-h-[250px] max-h-[400px] bg-green-400 flex flex-col items-center mb-5 mt-2 rounded-sm">
                <h1 className="">A Random GIF</h1>
                <div className="max-h-[350px] w-[350px] overflow-hidden">
                    {loader?<Loader/>:<img src={gif} />}
                </div>
                <button onClick={()=>fetchData()} 
                class="w-4/5 p-1 rounded-md text-xl font-semibold uppercase bg-white m-2">Generate</button>
            </div>
        </div>
    );
}

export default Random;