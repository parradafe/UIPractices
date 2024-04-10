export default function Header(){
    const pages = [
        {name: 'Furniture', href : '/'},
        {name: 'Shop', href : '/'},
        {name: 'About Us', href : '/'},
        {name: 'Contact', href : '/'},
    ];


    return(
        <header className="flex justify-between h-16 items-center bg-transparent text-white">
            <span className="ml-4 text-xl font-bold">
                <a href="/">Panto</a>
            </span>
            <div className="w-[50%] flex justify-around">
                {
                    pages.map(({name, href}) => (
                        <a href={href}>
                            <span>{name}</span>
                        </a>
                    ))
                }
            </div>
            <div className="mr-4">
                myIcon
            </div>
        </header>
    )
}