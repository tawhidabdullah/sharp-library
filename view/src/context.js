import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
// now we have access to 2  components

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  // GET DATA
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => {
      return room.featured === true;
    });
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
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
  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
