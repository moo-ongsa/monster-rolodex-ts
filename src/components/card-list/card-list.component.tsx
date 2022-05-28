import { Monster } from "../../App";

import "./card-list.style.css";

import { Card } from "../card/card.component";

type CardListProps = {
  monsters: Monster[];
};

export const CardList = (props: CardListProps) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
