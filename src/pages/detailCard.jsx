export default function DetailCard({data: {title, description}}){
    return(
        <div>
            <p className="font-bold text-xl mb-6">{title}</p>
            <p className="text-sm mb-6 leading-loose text-[#4b4b4b]">{description}</p>
            <p className="text-[#E58411]">
                {"More info ---->"}
            </p>
        </div>
    );
}