import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
// now we have access to 2  components

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  // GET DATA
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => {
      return room.featured === true;
    });
    let maxPrice = Math.max(
      ...rooms.map(item => {
        return item.price;
      })
    );
    let maxSize = Math.max(
      ...rooms.map(item => {
        return item.size;
      })
    );
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => {
        return image.fields.file.url;
      });

      const room = { ...item.fields, images, id };

      return room;
    });

    return tempItems;
  }

  getRoom = slug => {
    const tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => {
      if (room.slug === slug) {
        return room;
      }
    });
    return room;
  };

  handleChange = e => {};
  filterRooms() {
    console.log("filterrooms");
  }
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
