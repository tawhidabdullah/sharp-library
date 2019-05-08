import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";

// getAllUniqueValues
const getUniqueBookTypes = (items, value) => {
  return [
    ...new Set(
      items.map(item => {
        return item[value];
      })
    )
  ];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    price,
    minPrice,
    handleChange,
    type,
    capacity,
    maxPrice,
    minSize,
    maxSize,
    breakfast
  } = context;
  // get unique types
  let types = getUniqueBookTypes(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <form className="filter-form">
        {/* selectType */}
        <div className="form-group">
          <label htmlFor="type">Book Types</label>
          <select
            className="form-control"
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* End of selectType */}
      </form>
    </section>
  );
};

export default RoomsFilter;
