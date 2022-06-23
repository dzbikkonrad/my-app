import React from 'react';
import classes from "./Trips.module.css";
import Trip from "./../Trip";
import ITrip from "../Trip";

interface ITrips{
    trips: typeof ITrip[];
}

const Trips: React.FC<ITrips> = ({trips}) => {
    return (
        <section className={classes.tripsContainer}>
            {trips.map((trip: any) => <Trip key={trip.id} {...trip} />)}
        </section>
    );
}

export default Trips;