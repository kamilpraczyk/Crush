import { tList } from '../../helper/renderer';
let exp: any[] = [];

exp.push(tList({
    t: "",
    list: [
        { l: "You can add prefixes to the <p>beginning</p> of some words to change their meanings." },
        { s: " " },
        { to: ["happy", "<p>un</p>happy"] },
        { s: " " },
        { l: "Different prefixes different things." },
        { eq: ["un", "not"] },
        { eq: ["dis", "not"] },
        { eq: ["re", "again"] },
        { eq: ["pre", "before"] },
    ]
}));


export {
    exp
};
