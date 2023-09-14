import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";

import EventList from "@/components/events/envent-list";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>; // globalCSSだから
  }

  const numYear = +filterData[0]; //queryには文字列型で入っている
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust you values</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Events Fount for the chosen filter</p>
  }

  return (
    <div>
      <EventList items={filteredEvents}/>
    </div>
  );
}

export default FilteredEventsPage;
