export const calculateColor = (index: number, length: number, snake: number[][]): string => {
    const startColor = [67, 217, 173, 0]; // RGB for #43D9AD
    const endColor = [67, 217, 173, 1];

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

    const next = index == length - 1 ? snake[index] : snake[index + 1];
    const prev = index == 0 ? snake[index] : snake[index - 1];

    if (prev[0] == next[0]) {
        angle = prev[1] < next[1] ? "180deg" : "0deg";
    } else {
        if (prev[1] == next[1]) {
            angle = prev[0] > next[0] ? "270deg" : "90deg";
        } else {
            if (prev[0] > next[0]) {
                if (prev[1] > next[1]) {
                    angle = "315deg";
                } else {
                    angle = "225deg";
                }
            } else {
                if (prev[1] < next[1]) {
                    angle = "135deg";
                } else {
                    angle = "45deg";
                }
            }
        }
    }
    return `linear-gradient(${angle}, rgba(${colorAtStart[0]}, ${colorAtStart[1]}, ${colorAtStart[2]}, ${colorAtStart[3]}), rgba(${colorAtEnd[0]}, ${colorAtEnd[1]}, ${colorAtEnd[2]}, ${colorAtEnd[3]}))`;
};
