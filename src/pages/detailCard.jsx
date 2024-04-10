export default function DetailCard({ data: { title, description } }) {
    return (
        < div className="grid grid-cols-1">
            <div>
                <p className="font-bold text-xl mb-6">{title}</p>
                <p className="text-sm leading-loose text-[#4b4b4b]">{description}</p>

            </div>
            <div>
                <p className="text-[#E58411]">
                    {"More info ---->"}
                </p>
            </div>
        </div>
    );
}