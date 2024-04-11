export default function ProductCard({ data: { image, type, productName, rate, price } }) {
    return (
        <div className="rounded-2xl bg-white w-[268px]">
            <div className="flex justify-center rounded-t-2xl bg-[#efefef] min-h-[288px]">
                <img className="relative -top-14 h-[196] w-[240]" src={image} />
            </div>
            <div className="pt-3 px-4 pb-8">
                <div className="mb-8">
                    <p className="text-gray-500 font-thin">{type}</p>
                    <p className="font-semibold text-xl">{productName}</p>
                    <div>{rate}</div>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <p className="relative -top-1 font-semibold text-md">$</p>
                        <p className="font-semibold text-xl ml-[3px]">
                            {price}
                        </p>
                    </div>
                    <div className="bg-black text-white rounded-full w-12 h-12 text-3xl flex p-0 items-center justify-center">
                        +
                    </div>
                </div>
            </div>
        </div>
    );
}