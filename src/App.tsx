const SITES = [
  { name: "Bittrees, Inc.", href: "https://gov.bittrees.org", box: "border-orange-600 shadow-orange-600 hover:shadow-orange-800" },
  { name: "Bittrees Research", href: "https://research.bittrees.org", box: "border-green-600 shadow-green-600 hover:shadow-green-800" },
  { name: "Bittrees Capital", href: "https://capital.bittrees.org", box: "border-gray-400 shadow-gray-500 hover:shadow-gray-700" },
];

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <main className="bg-[#ffffff] flex flex-col min-h-screen align-top">
        <div className="flex flex-col gap-6 p-6 items-center">
          <div className="h-5"></div>

          <a href="/" className="mx-auto">
            <img
              src="/bittrees.png"
              width="128px"
              height="128px"
              alt="Bittrees"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            />
          </a>

          {SITES.map((s) => (
            <a
              key={s.href}
              className="text-xl text-black no-underline hover:underline font-newtimesroman"
              target="_self"
              rel="noreferrer"
              href={s.href}
            >
              <div className={`mx-auto border p-4 w-80 flex flex-col justify-center items-center shadow-md ${s.box}`}>
                <div className="h-5"></div>
                {s.name}
                <div className="h-5"></div>
              </div>
            </a>
          ))}

          <div className="h-5"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
