import Random from './components/Random';
import Tag from './components/Tag';


function App() {
  return (
    <div className="bg-slate-500 w-full h-screen flex flex-col items-center ">
        <h1 className="w-11/12 bg-white py-2 text-3xl rounded-md text-center font-semibold mt-3">Random GIFS</h1>
      <div className="flex flex-col justify-center">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
