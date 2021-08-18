import { useRouter } from "next/dist/client/router";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getEventById } from "../../dummy-data";

export default function EventPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log(event)
  return (
    <>
      {event ? (
        <>
          <EventSummary title={event.title} />
          <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
          /> 
          <EventContent>
            <p>{event.description}</p>
          </EventContent>
        </>
      ) : (
        <div>No Event Found </div>
      )}
    </>
  );
}
