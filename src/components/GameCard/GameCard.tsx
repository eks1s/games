import { FC, useRef, useState } from "react";
import "./GameCard.scss";
import { useIntersection } from "../../helpers/intersectionObserver";
import classNames from "classnames";

export interface ICard {
    aspectRatio: string;
    demoGameAvailable: boolean;
    gameID: string;
    gameIdNumeric: number;
    gameName: string;
    gameTypeID: string;
    jurisdictions: Array<string>;
    platform: string;
    technology: string;
    technologyID: string;
    typeDescription: string;
}

export interface ICardProps {
    card: ICard;
}

const GameCard: FC<ICardProps> = (props) => {
    const {
        card: { gameID, gameName },
    } = props;

    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<any>();
    useIntersection(imgRef, () => {
        setIsInView(true);
    });

    const handleOnLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className="image-container" ref={imgRef}>
            {isInView && (
                <>
                    <img
                        className={classNames(
                            "image",
                            "thumb",
                            isLoaded && "isLoaded"
                        )}
                        src={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${gameID}.png`}
                        alt="img"
                    />
                    <img
                        className={classNames("image", isLoaded && "isLoaded")}
                        src={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${gameID}.png`}
                        onLoad={handleOnLoad}
                        alt="img"
                    />
                </>
            )}

            <h1>{gameName}</h1>
        </div>
    );
};

export default GameCard;
