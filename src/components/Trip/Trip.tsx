import React from 'react';
import classes from "./Trip.module.css";
import Title from "../Title";
import {TitleVariants} from "../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {StarVariants} from "../../constants";

const faStarIcon = faStar as IconProp;
const faStarStrokeIcon = faStarHalfStroke as IconProp;

export interface ITrip {
    image: string,
    scope: string,
    title: string,
    rating: number,
    price: string,
    priceBefore: string,
}

const Trip: React.FC<ITrip> = ({image, scope, title, rating, price, priceBefore}) => {

    const ratingToStars = () => {
        const stars = new Array(Math.round(rating)).fill(StarVariants.FULL);
        const ratingToString = rating.toString();
        const takeLastValueOfRating = ratingToString[2];

        if(takeLastValueOfRating && +takeLastValueOfRating < 5) {
            stars.push(StarVariants.HALF);
        }

        return stars.map((star, index) => {
            if (star === StarVariants.FULL) {
                return <FontAwesomeIcon key={index} icon={faStarIcon} className={classes.starIcon} />
            } else {
                return <FontAwesomeIcon key={index} icon={faStarStrokeIcon} className={classes.starIcon} />
            }
        });
    };

    return (
        <article>
            <div className={classes.card}>
                <img className={classes.cardImg} src={image} alt={title}/>
                <div className={classes.cardInfo}>
                    <p className={classes.scope}>{scope}</p>
                    <Title text={title} variant={TitleVariants.TITLE}/>
                    <div className={classes.ratingContainer}>
                        {ratingToStars()}
                        <p className={classes.rating}>{rating}</p>
                    </div>
                    <div className={classes.priceContainer}>
                        <p className={classes.price}>From &euro;{price}</p>
                        <p className={classes.priceBefore}>&bull; <span className={classes.struck}>Price &euro;{priceBefore}</span></p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Trip;