
function App() {
  return (
    <div className="max-w-4xl mx-auto">
      
      <main className="bg-[#ffffff] flex flex-col h-screen align-top">
        
        <div className="flex flex-col gap-6 p-6">

        <div className="h-5"></div>

          <div className="mx-auto p-0 w-80 flex flex-col justify-center items-center">

             <a href="/" className="mx-auto">
                <img
                  src="/bittrees.png"
                  width="128px"
                  height="128px"
                  alt="Bittrees.org"
                  className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                />
              </a>
          </div>
          <a className="text-xl text-black no-underline hover:underline font-newtimesroman" 
              target="_self" 
              rel="noreferrer"
              href="https://gov.bittrees.org">
            <div className="mx-auto border border-orange-600 p-4 w-80 flex flex-col justify-center items-center shadow-md shadow-orange-600 hover:shadow-orange-800">
              <div className="h-5"></div>
              Bittrees Inc
              <div className="h-5"></div>
            </div>
          </a> 
          <a className="text-xl text-black no-underline hover:underline font-newtimesroman" 
            target="_self" 
            rel="noreferrer"
            href="https://research.bittrees.org">
            <div className="mx-auto border border-green-600 p-4 w-80 flex flex-col justify-center items-center shadow-md shadow-green-600 hover:shadow-green-800">
            <div className="h-5"></div>
              Research
              <div className="h-5"></div>
            </div>
          </a>
          <div className="mx-auto border border-gray-400 p-4 w-80 flex flex-col justify-center items-center shadow-md shadow-gray-500">
              <div className="h-5"></div>
              <div className="text-xl text-gray-400 font-newtimesroman">Capital</div>  
              <div className="h-5"></div>
          </div>
        </div>
      </main>
    
    </div>
  );
}

export default App;
