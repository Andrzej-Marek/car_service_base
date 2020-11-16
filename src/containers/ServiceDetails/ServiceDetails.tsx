import React, { FC } from "react";
import styled from "styled-components";
import ServiceTiles from "./components/ServiceTiles/ServiceTiles";

interface OwnProps{
    title: string
};

type Props = OwnProps;

const ServiceDetails: FC<Props> = () => {
    return (
        <div>
            service details
            <ServiceTiles/>
        </div>
    );
};


export default ServiceDetails;