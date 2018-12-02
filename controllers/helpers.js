// helper function to format user object structure
const formatUser = (user) => {
    return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        is_active: user.is_active
    };
};

// helper function to format event object structure
const formatEvent = (event) => {
    return {
        id: event.id,
        name: event.name,
        category: event.event_category.name,
        description: event.description,
        capacity: event.capacity,
        attending: event.attending.map(user => formatUser(user)),
        address: event.address,
        neighborhood: event.new_york_city_neighborhood.name,
        longitude: event.longitude,
        latitude: event.latitude,
        organizer: formatUser(event.organizer),
        date_time: event.date_time,
        duration: event.duration
    };
};

// helper function to format category/neighborhood object structure
const formatObject = (object) => {
    return {
        id: object.id,
        name: object.name,
        events: object.events.map(event => formatEvent(event))
    };
};

//
const formatUserWithEvents = (user) => {
    return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        is_active: user.is_active,
        events: user.events.map(event => formatEvent(event))
    };
};

// export functions
module.exports = {
    formatUser: formatUser,
    formatEvent: formatEvent,
    formatObject: formatObject,
    formatUserWithEvents: formatUserWithEvents
}
