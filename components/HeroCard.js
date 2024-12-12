

function HeroCard() {
    return(
        <>
        <div className="grid grid-cols-60/40 w-full gap-2 p-6 bg-white border border-gray-200 rounded-lg">
            <div className="h-[30px] w-full">
                <h1 className="font-poppins">Welcome, user.</h1>
            </div>
            <div className="h-[30px] w-full bg-black" />
        </div>

        </>
    )
} 

export default HeroCard;

