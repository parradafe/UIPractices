export default function MainContent(){
    return(
        <div className="mt-20">
            <div className="text-white w-full flex flex-col items-center">
                <h1 className="text-7xl font-bold w-3/4 text-center leading-tight">Make Your Interior More Minimalistic & Modern</h1>
                <h3 className="mt-4 text-2xl font-thin w-[45%] text-center">Turn your room with panto into a lot more minimalist and modern with ease and speed</h3>
            </div>
            {/* searchbar */}
            <div className="flex w-full justify-center h-14 mt-6">
                <div className="border-white text-white bg-gray-700 w-[30%] flex items-center justify-between pl-5 pr-2 rounded-full">
                    <p>Search Furniture</p>
                    <span className="rounded-full bg-purple-600 h-11 w-11">
                    </span>
                </div>
            </div>
        </div>
    );
}