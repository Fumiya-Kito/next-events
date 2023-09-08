import EventList from "@/components/events/envent-list";
import { getFeaturedEvents } from "@/dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  )
}

export default HomePage;