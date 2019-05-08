import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import { RoomConsumer } from "../context";

const RoomsContainer = () => {
  return (
    <RoomConsumer>
      {value => {
        const { sortedRooms, loading, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div className="booksContainer">
            <div>
              <RoomsFilter rooms={rooms} />
            </div>
            <div>
              <RoomsList rooms={sortedRooms} />
            </div>
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomsContainer;
