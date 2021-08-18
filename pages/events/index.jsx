import { EventList } from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

export default function EventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
