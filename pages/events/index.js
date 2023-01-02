import React from 'react'
import EventList from '../../components/events/event-list'
import { getAllEvents } from '../../dummy-data'

function EventsPage() {
 
    const events = getAllEvents()

    return (
        <EventList items={events} />
    )
}

export default EventsPage