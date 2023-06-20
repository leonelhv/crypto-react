import { IconLogo } from "../assets/svg/Icons";

export default function Title () {
    return (
        <div className="flex justify-center items-center bg-black/50 relative z-30 backdrop-blur-sm">
            <IconLogo className={"h-12 text-yellow-500 relative z-20"} />
            <h1 className="text-5xl font-bold ml-1 py-4 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"><span className="text-yellow-500">C</span>rypto <span className="text-yellow-500">U</span>pdate</h1>
        </div>
    )
}