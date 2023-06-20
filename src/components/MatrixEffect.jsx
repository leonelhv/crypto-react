import { useEffect, useRef } from "react";
// import { getRandomValueFromArray } from "../utils/randomValue";

const MatrixEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let w = canvas.width = document.body.offsetWidth;
        let h = canvas.height = document.body.offsetHeight;
        const cols = Math.floor(w / 20) + 1;
        const ypos = Array(cols).fill(0);

        const matrix = () => {
            ctx.fillStyle = "#0001";
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = "#0f0";
            ctx.font = "10pt monospace";

            ypos.forEach((y, ind) => {
                const text = String.fromCharCode(Math.random() * 128);
                // const text = getRandomValueFromArray(["1", "0"]);
                const x = ind * 20;
                ctx.fillText(text, x, y);
                if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
                else ypos[ind] = y + 20;
            });
        };

        const resizeHandler = () => {
            w = canvas.width = document.body.offsetWidth;
            h = canvas.height = document.body.offsetHeight;
        };

        window.addEventListener("resize", resizeHandler);

        const intervalId = setInterval(matrix, 90);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 -z-0">Canvas is not supported in your browser.</canvas>;
};

export default MatrixEffect;
