import DetailCard from "./detailCard";

export default function SecondSection(){
    const references = [
        {title : 'Luxury facilities',
        description : 'The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.'},
        {title : 'Affordable Price',
        description : 'You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.'},
        {title : 'Many Choices',
        description : 'We provide many unique work space choices so that you can choose the workspace to your liking.'},
    ];
    
    return(
        <div className="bg-white h-32 grid grid-cols-[minmax(300px,35%)_1fr] mt-24 mx-6">
            <div className="flex justify-center items-center">
                <span className="text-[40px] font-semibold h-14">
                    Why Choosing Us
                </span>
            </div>
            <div className="flex gap-6">
                {
                    references.map( reference => <DetailCard key={reference.title} data={reference}/> )
                }
            </div>
        </div>
    );
}