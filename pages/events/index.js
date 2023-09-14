import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/envent-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";

function AllEventsPage() {
  const events = getAllEvents();
  // Hooksはネストさせてはいけない!
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    // const fullPath = `/events/${year}` // この場合は[slug]ではなく、[eventId]コンポーネントが呼ばれる
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events}  />
    </>
  )
}

export default AllEventsPage;