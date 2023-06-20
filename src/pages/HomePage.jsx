import Markets from "../components/Markets";
import MatrixEffect from "../components/MatrixEffect";
import Title from "../components/Title";
import Trending from "../components/Trending";

export default function HomePage () {
    return (
        <div className="w-full">
            <MatrixEffect />
            <Title />
            <div className="flex flex-col justify-center items-center relative z-10  w-3/4 mx-auto  rounded-lg ">
                <div className="flex gap-4 my-12">
                    <Markets />
                    <Trending />
                </div>

            </div>

        </div>

    )
}