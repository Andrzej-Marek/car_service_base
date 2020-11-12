import React, { FC } from "react";
import { ServiceTile } from "./components";

interface OwnProps{};

type Props = OwnProps;

const ServiceDetails: FC<Props> = () => {

    return (
        <div>
            service details
            <ServiceTile/>
        </div>
    );
};

export default ServiceDetails;