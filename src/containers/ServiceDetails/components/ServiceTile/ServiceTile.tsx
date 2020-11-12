import { Tile } from "@/components";
import React, { FC } from "react";

interface OwnProps{};

type Props = OwnProps;

const ServiceTile: FC<Props> = () => {

    return (
        <div>
            <Tile title="Dane samochodu">
                test
            </Tile>
        </div>
    );
};

export default ServiceTile;