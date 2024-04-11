
export default function Home({children}) {
    return (
        <div className="h-[100vh] w-[100vw]">
            <div className="pt-5 bg-[url('/src/assets/pantohome.png')] w-full h-[100vh] maskImg bg-no-repeat bg-cover" >
                {children}
            </div>
        </div>
    )
}