import React, { ChangeEvent, useEffect, useState } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/seach-box.component";

import { getData } from "./utils/data.utils";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchFiled] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers()
  }, []);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster: Monster)=>(monster.name.includes(searchField)))
    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchFiled(event.target.value)
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placheoder="seach monsters"
        handleChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
