import React from "react";
import classes from "./Title.module.css";
import {TitleVariants} from "../../constants";

interface ITitle {
    text: string,
    variant: TitleVariants.TITLE | TitleVariants.HEADER,
}

const Title: React.FC<ITitle> = ({text, variant}) => {

    if (variant === TitleVariants.HEADER) {
        return (
            <header>
                <h1 className={`${classes.text} ${classes.header}`}>{text}</h1>
            </header>
        );
    }

    return <p className={classes.text}>{text}</p>
}

export default Title;