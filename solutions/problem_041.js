import Heap from '../data-structures/Heap'

/**
 * Returns the persons' itinerary
 * @param {string[][]} flightPath
 * @param {string} startingAirport
 * @return {string[]}
 */
function createItinerary(flightPath, startingAirport) {
  // Key: string; Value: Heap
  const flightMap = new Map();

  // Construct map queue to keep order
  for(let i = 0; i < flightPath.length; i++) {
    const flight = flights[i];
    const [origin, destination] = flight;
    if(!flightsMap.has(origin)) {
      flightsMap.set(origin, new Heap((a, b) => b.localeCompare(a)));
    }
    flightsMap.get(origin).add(destination);
  }

  // Find suitable path
  const itinerary = [];
  visit(startingAirport, flightsMap, itinerary);

  // Check if path does not exist
  const keys = Array.from(flightsMap.keys());
  for (let i = 0; i < keys.length; i++) {
    const pq = flightsMap.get(keys[i]);
    if(pq.size() !== 0) return null;
  }

  // Return appropriate path
  return itinerary;
}

/**
 * Perform dfs. When we are done visiting every neighbor in nodes, add to the front of itinerary
 * @param {string} startingAirport
 * @param {Map<string, Heap>} flightsMap
 * @param {string[]} itinerary
 */
function visit(startingAirport, flightsMap, itinerary) {
  const pq = flightsMap.get(startingAirport);
  if(pq !== undefined && pq.size !== 0) {
    visit(pq.poll(), flightsMap, itinerary);
  }
  itinerary.unshift(startingAirport);
}
