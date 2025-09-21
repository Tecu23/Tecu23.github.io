import { useRef, useState, useEffect } from "react";
import { calculateColor } from "../../../../utils/helpers/snake";

const Snake = () => {
    const [snake, setSnake] = useState<number[][]>([
        [5, 5],
        [5, 6],
        [5, 7],
        [5, 8],
        [5, 9],
        [6, 9],
        [7, 9],
        [7, 10],
        [7, 11],
        [7, 12],
    ]);
    const [food, setFood] = useState([10, 10]);
    const [foodCount, setFoodCount] = useState(0);

    const [direction, setDirection] = useState("down");
    const [isPlaying, setIsPlaying] = useState(false);
    const [gameResult, setGameResult] = useState("");

    const gameAreaRef = useRef(null);

    const gameAreaWidth = 224 / 16; // 14 squares of width
    const gameAreaHeight = 416 / 16; // 26 squares of height

    const SPEED = 150;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            e.preventDefault();
            switch (e.key) {
                case "ArrowUp":
                    if (direction !== "down") setDirection("up");
                    break;
                case "ArrowDown":
                    if (direction !== "up") setDirection("down");
                    break;
                case "ArrowLeft":
                    if (direction !== "right") setDirection("left");
                    break;
                case "ArrowRight":
                    if (direction !== "left") setDirection("right");
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
                    case "up":
                        head[1] -= 1;
                        break;
                    case "down":
                        head[1] += 1;
                        break;
                    case "left":
                        head[0] -= 1;
                        break;
                    case "right":
                        head[0] += 1;
                        break;
                    default:
                        break;
                }

                // Ensure the snake stays within bounds
                if (head[0] < 0 || head[0] >= gameAreaWidth || head[1] < 0 || head[1] >= gameAreaHeight) {
                    setGameResult("lost");
                    setIsPlaying(false);
                    return prevSnake;
                }

                // Check if the snake bites itself
                if (newSnake.some((segment) => segment[0] === head[0] && segment[1] === head[1])) {
                    setIsPlaying(false);
                    setGameResult("lost");
                    return prevSnake;
                }

                newSnake.push(head);
                newSnake.shift();
                return newSnake;
            });
        };

        const interval = setInterval(moveSnake, SPEED);
        return () => clearInterval(interval);
    }, [direction, isPlaying]);

    useEffect(() => {
        if (!isPlaying) return;

        const head = snake[snake.length - 1];
        console.log(head, food);
        if (head[0] === food[0] && head[1] === food[1]) {
            setFood([Math.floor(Math.random() * gameAreaWidth), Math.floor(Math.random() * gameAreaHeight)]);
            setSnake((prevSnake) => [[...prevSnake[0]], ...prevSnake]);
            setFoodCount((prevCount) => {
                const newCount = prevCount + 1;
                if (newCount >= 10) {
                    setIsPlaying(false); // End the game when 10 food is collected
                    setGameResult("won");
                }
                return newCount;
            });
        }
    }, [snake, food, isPlaying]);

    const restart = () => {
        setIsPlaying(true);
        setSnake([
            [5, 5],
            [5, 6],
            [5, 7],
            [5, 8],
            [5, 9],
            [6, 9],
            [7, 9],
            [7, 10],
            [7, 11],
            [7, 12],
        ]);
        setFood([10, 10]);
        setDirection("down");
        setFoodCount(0);
        setGameResult("");
    };

    return (
        <div className="w-[550px] h-[500px] hidden lg:flex gap-6 flex-shrink-0 flex-grow-0 flex-auto rounded-lg relative bg-bg-gradient-to-mb from-grey-700 to-primary-dark/25 border-2 border-grey-600 p-8">
            <div ref={gameAreaRef} className="h-full w-[240px] p-2 flex-auto flex-shrink-0 flex-grow-0 rounded-lg bg-grey-900 relative">
                <div className="absolute inset-0">
                    {snake.map((segment, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 absolute ${index == snake.length - 1 ? (direction == "up" ? "rounded-t-md" : direction == "right" ? "rounded-r-md" : direction == "left" ? "rounded-l-md" : "rounded-b-md") : ""}`}
                            style={{
                                left: `${segment[0] * 16 + 8}px`,
                                top: `${segment[1] * 16 + 8}px`,
                                background: calculateColor(index, snake.length, snake),
                                zIndex: snake.length - index,
                            }}
                        ></div>
                    ))}
                </div>

                <div style={{ left: `${food[0] * 16}px`, top: `${food[1] * 16}px` }} className="relative flex-center w-4 h-4">
                    <div className="absolute animate-ping w-6 h-6 inline-flex rounded-full opacity-25 bg-primary-dark"></div>
                    <div className="w-4 h-4 bg-primary-dark rounded-full animate-none"></div>
                </div>
                {!isPlaying && gameResult === "" && (
                    <button
                        onClick={() => setIsPlaying(true)}
                        className="z-30 absolute bottom-[50px] left-1/2 transform -translate-x-1/2 h-10 bg-primary-dark px-[14px] py-[10px] flex-center rounded-lg hover:bg-primary"
                    >
                        <p className="paragraph-16 font-bold text-white">Start Game</p>
                    </button>
                )}
                {!isPlaying && gameResult !== "" && (
                    <>
                        <div className="z-30 absolute bottom-28 w-full left-0 h-16 flex-center bg-grey-800 py-2">
                            <h2 className="heading-4 text-primary-light ">{gameResult == "lost" ? "GAME OVER" : "WELL DONE"}</h2>
                        </div>
                        <button onClick={() => restart()} className="z-30 absolute bottom-14 w-full left-0 h-8 flex-center">
                            <p className="paragraph-16 font-semibold text-grey-100 hover:text-white">Start Again</p>
                        </button>
                    </>
                )}
            </div>
            <div className="flex gap-4 flex-col flex-grow flex-shrink flex-auto">
                <div className="rounded-lg relative p-4 bg-grey-900/15 flex flex-col gap-1">
                    <p className="paragraph-16 relative text-center text-white max-w-[170px] self-center">Use Keyboard Arrows to Play</p>
                    <div className="flex items-center justify-center w-full">
                        <div className="w-[50px] h-[30px] flex-center bg-grey-900 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                                <path d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <div className="w-[50px] h-[30px] flex-center bg-grey-900 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                                <path d="M0.0390623 4.80914L6.03906 0.559128L6.03906 9.05916L0.0390623 4.80914Z" fill="white" />
                            </svg>
                        </div>
                        <div className="w-[50px] h-[30px] flex-center bg-grey-900 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
                                <path d="M4.49998 6.80914L0.24997 0.809142L8.75 0.809143L4.49998 6.80914Z" fill="white" />
                            </svg>
                        </div>
                        <div className="w-[50px] h-[30px] flex-center bg-grey-900 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                                <path d="M6.96094 4.80914L0.960938 9.05916L0.960938 0.559128L6.96094 4.80914Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 flex-col self-start p-4 max-w-[200px]">
                    <p className="paragraph-16 relative text-white max-w-[170px]">Food Left</p>
                    <div className="flex flex-wrap gap-4">
                        {Array(10 - foodCount)
                            .fill(0)
                            .map((_, idx) => (
                                <div key={idx} className="relative flex-center w-4 h-4">
                                    <div className="absolute animate-ping w-full h-full inline-flex rounded-full opacity-25 bg-primary-dark"></div>
                                    <div className="w-3 h-3 bg-primary-dark rounded-full animate-none"></div>
                                </div>
                            ))}
                        {Array(foodCount)
                            .fill(0)
                            .map((_, idx) => (
                                <div key={idx} className="relative flex-center w-4 h-4 opacity-50">
                                    <div className="absolute animate-ping w-full h-full inline-flex rounded-full opacity-25 bg-primary-dark"></div>
                                    <div className="w-3 h-3 bg-primary-dark rounded-full animate-none"></div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Snake;
