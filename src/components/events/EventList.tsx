import { getEvents } from "@services/eventService";
import EventCard from "@components/events/EventCard";
import type { Event } from "@services/eventService";
import { useState, useEffect } from "react";
import EventSkeleton from "./EventSkeleton";

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getEvent = async () => {
      setLoading(!loading);
      try {
        const events = await getEvents();
        setEvents(events);
      } catch (error) {
        console.error(error);
        throw new Error("Error al obtener los eventos");
      } finally {
        setLoading(false);
      }
    };

    getEvent();
  }, []);

  if (loading) return <EventSkeleton />;

  return (
    <>
      {events.map(
        ({
          id,
          title,
          description,
          location,
          startDate,
          endDate,
          createdAt,
          imageUrl,
        }) => (
          <EventCard
            key={id}
            title={title}
            description={description}
            location={location}
            startDate={startDate}
            endDate={endDate}
            createdAt={createdAt}
            imageUrl={imageUrl}
          />
        )
      )}
    </>
  );
};

export default EventList;
