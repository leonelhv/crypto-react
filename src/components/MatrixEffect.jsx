import { useEffect, useRef } from "react";

const MatrixEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);
        const cols = Math.floor(w / 20) + 1;
        const ypos = Array(cols).fill(0);

        const matrix = () => {
            ctx.fillStyle = "#0001";
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = "#0f0";
            ctx.font = "10pt monospace";

            ypos.forEach((y, ind) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = ind * 20;
                ctx.fillText(text, x, y);
                if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
                else ypos[ind] = y + 20;
            });
        };

        const resizeHandler = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeHandler);

        const intervalId = setInterval(matrix, 90);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0"
            style={{ position: "fixed" }}
        >
            Canvas is not supported in your browser.
        </canvas>
    );
};

export default MatrixEffect;
