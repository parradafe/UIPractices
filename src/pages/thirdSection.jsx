import ProductCard from "../components/productCard";
import chair1 from '../assets/chair1.png';
import chair2 from '../assets/chair2.png';
import chair3 from '../assets/chair3.png';
import chair4 from '../assets/chair4.png';

export default function ThirdSection(){
    const productsData = [
        /* {
            image : chair1,
            type : 'Chair',
            productName : 'Sakarias Armchair',
            rate : 3,
            price : 392
        }, */
        {
            image : chair2,
            type : 'Chair',
            productName : 'Baltsar Chair',
            rate : 4,
            price : 299
        },
        {
            image : chair3,
            type : 'Chair',
            productName : 'Anjay Chair',
            rate : 5,
            price : 519
        },
        {
            image : chair4,
            type : 'Chair',
            productName : 'Nyantuy Chair',
            rate : 2,
            price : 921
        }
    ]



    return(
        <div className="min-h-64 bg-[#f7f7f7] w-full">
            <div className="flex justify-center">
                <p className="font-semibold text-5xl mt-14">Best Selling Product</p>
            </div>
            <div>
                Menu section
            </div>
            <div className="mt-28 mx-32 flex gap-x-10">
                {
                    productsData.map( product => <ProductCard data={product} /> )
                }
            </div>
        </div>
    )
}