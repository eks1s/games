import { useGetAllGamesQuery } from "../../api/gamesApi";
import GameCard, { ICard } from "../GameCard/GameCard";

import "./GameCards.scss";
import { useAppSelector } from "../../redux/store";

function GameCards() {
    const {
        data: { result } = [],
        isError,
        isLoading,
    } = useGetAllGamesQuery("");

    const filter = useAppSelector((state) => state.productFilter.filter);
    const option = useAppSelector((state) => state.optionFilter.option);

    const filteredResult = () => {
        if (option === "All") {
            return result;
        } else {
            return result.filter(
                (card: ICard) => card.typeDescription === option
            );
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    return (
        <div className="cardsWrapper">
            {filteredResult()
                .filter((card: ICard) =>
                    card.gameName.toLowerCase().includes(filter)
                )
                .map((card: ICard) => {
                    return <GameCard key={card.gameID} card={card} />;
                })}
        </div>
    );
}

export default GameCards;
