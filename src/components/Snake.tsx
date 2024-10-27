import { useRef, useState, useEffect } from "react";

const Snake = () => {
    const [snake, setSnake] = useState<number[][]>([
        [5, 5],
        [5, 6],
        [5, 7],
        [5, 8],
        [5, 9],
        [5, 10],
        [6, 10],
        [7, 10],
        [8, 10],
        [8, 11],
        [8, 12],
        [8, 13],
        [8, 14],
    ]);
    const [food, setFood] = useState([10, 10]);

    const [direction, setDirection] = useState("r");
    const [isPlaying, setIsPlaying] = useState(false);

    const gameAreaRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case "ArrowUp":
                    if (direction !== "d") setDirection("u");
                    break;
                case "ArrowDown":
                    if (direction !== "u") setDirection("d");
                    break;
                case "ArrowLeft":
                    if (direction !== "r") setDirection("l");
                    break;
                case "ArrowRight":
                    if (direction !== "l") setDirection("r");
                    break;
                default:
                    break;
            }
        };

        if (isPlaying) {
            window.addEventListener("keydown", handleKeyDown);
        } else {
            window.removeEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [direction, isPlaying]);

    useEffect(() => {
        const moveSnake = () => {
            if (!isPlaying) return;
            setSnake((prevSnake) => {
                const newSnake = [...prevSnake];
                const head = [...newSnake[newSnake.length - 1]];

                switch (direction) {
                    case "u":
                        head[1] -= 1;
                        break;
                    case "d":
                        head[1] += 1;
                        break;
                    case "l":
                        head[0] -= 1;
                        break;
                    case "r":
                        head[0] += 1;
                        break;
                    default:
                        break;
                }

                newSnake.push(head);
                newSnake.shift();
                return newSnake;
            });
        };

        const interval = setInterval(moveSnake, 500);
        return () => clearInterval(interval);
    }, [direction, isPlaying]);

    useEffect(() => {
        if (!isPlaying) return;
        const head = snake[snake.length - 1];
        if (head[0] === food[0] && head[1] === food[1]) {
            setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
            setSnake((prevSnake) => [[...prevSnake[0]], ...prevSnake]);
            // setSpeed((prevSpeed) => (prevSpeed > 50 ? prevSpeed - 10 : prevSpeed));
        }
    }, [snake, food, isPlaying]);

    const calculateColor = (index: number, length: number): string => {
        const startColor = [67, 217, 173, 1]; // RGB for #43D9AD
        const endColor = [67, 217, 173, 0];

        const ratio = index / (length - 1);
        const r = Math.round(startColor[0] + ratio * (endColor[0] - startColor[0]));
        const g = Math.round(startColor[1] + ratio * (endColor[1] - startColor[1]));
        const b = Math.round(startColor[2] + ratio * (endColor[2] - startColor[2]));
        const a = startColor[3] + ratio * (endColor[3] - startColor[3]);

        const ratio2 = (index + 1) / (length - 1);
        const r2 = Math.round(startColor[0] + ratio2 * (endColor[0] - startColor[0]));
        const g2 = Math.round(startColor[1] + ratio2 * (endColor[1] - startColor[1]));
        const b2 = Math.round(startColor[2] + ratio2 * (endColor[2] - startColor[2]));
        const a2 = startColor[3] + ratio2 * (endColor[3] - startColor[3]);

        const colorAtStart = index == 0 ? startColor : [r, g, b, a];
        const colorAtEnd = index == length - 1 ? endColor : [r2, g2, b2, a2];

        let angle = "";

        const prev = index == length - 1 ? snake[index] : snake[index + 1];
        const next = index == 0 ? snake[index] : snake[index - 1];

        if (prev[0] == next[0]) {
            angle = "180deg";
        } else {
            if (prev[1] == next[1]) {
                angle = "90deg";
            } else {
                if (prev[0] > next[0]) {
                    if (prev[1] > next[1]) {
                        angle = "135deg";
                    } else {
                        angle = "225deg";
                    }
                } else {
                    if (prev[1] < next[1]) {
                        angle = "45deg";
                    } else {
                        angle = "315deg";
                    }
                }
            }
        }

        return `linear-gradient(${angle}, rgba(${colorAtStart[0]}, ${colorAtStart[1]}, ${colorAtStart[2]}, ${colorAtStart[3]}), rgba(${colorAtEnd[0]}, ${colorAtEnd[1]}, ${colorAtEnd[2]}, ${colorAtEnd[3]}))`;
    };

    return (
        <div className="w-[500px] h-[500px] hidden md:flex flex-shrink-0 flex-grow-0 flex-auto rounded-lg relative bg-bg-gradient-to-mb from-top-left to-bottom from-[#175553] to-[#43D9AD21] border-2 border-grey-600 p-8">
            <div ref={gameAreaRef} className="h-full w-[240px] flex-auto flex-shrink-0 flex-grow-0 rounded-lg bg-grey-900 relative">
                <div className="absolute inset-0">
                    {snake.map((segment, index) => (
                        <>
                            <div
                                key={index}
                                className={`w-4 h-4 absolute ${index == 0 ? "rounded-t-lg" : ""}`}
                                style={{
                                    left: `${segment[0] * 16}px`,
                                    top: `${segment[1] * 16}px`,
                                    background: calculateColor(index, snake.length),
                                    zIndex: snake.length - index,
                                }}
                            ></div>
                        </>
                    ))}
                </div>

                <div style={{ left: `${food[0] * 16}px`, top: `${food[1] * 16}px` }} className="relative flex-center w-6 h-6">
                    <div className="absolute animate-ping w-full h-full inline-flex rounded-full opacity-25 bg-primary-dark"></div>
                    <div className="w-4 h-4 bg-primary-dark rounded-full animate-none"></div>
                </div>
                <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 h-10 bg-primary-dark px-[14px] py-[10px] flex-center rounded-lg">
                    <p className="paragraph-16 font-bold text-white">Start game</p>
                </div>
            </div>
        </div>
    );
};

export default Snake;
