import React from 'react'
import EventItem from './event-item'
import classes from './event-list.module.css'

function EventList(props) {
    const {items} =props

  return (
    <ul className={classes.list}>
        {items.map(item =>(
            <EventItem 
            id={item.id} 
            title={item.title} 
            date={item.date}
            location={item.location}
            address={item.address}
            image={item.image}
             />
        ))}
    </ul>
  )
}

export default EventList