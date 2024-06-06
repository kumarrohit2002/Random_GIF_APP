import Reeat,{ useEffect, useState } from 'react';
import Loader from './Loader';
import useGif from '../hooks/useGif';

function Tag(){

    const [tag,setTag]=useState('')
    const {gif,loader,fetchData}=useGif(tag);


    return(
        <div>
            <div className="w-[500px] min-h-[250px] max-h-[400px] bg-red-300 flex flex-col items-center mb-5 rounded-sm">
                <h1 className="">Random {tag} GIF</h1>
                <div className="max-h-[350px] w-[350px] overflow-hidden">
                    {loader?<Loader/>:<img src={gif} />}
                </div>
                <input className='m-2 w-8/12 text-center' onChange={(event)=>setTag(event.target.value)} value={tag}
                 placeholder='Enter your tag for search'/>
                <button onClick={()=>fetchData()} 
                class="w-4/5 p-1 rounded-md text-xl font-semibold uppercase bg-white m-2">Generate</button>
            </div>
        </div>
    );
}

export default Tag;