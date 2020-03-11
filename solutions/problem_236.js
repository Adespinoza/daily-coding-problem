// Source: https://www.geeksforgeeks.org/how-to-check-if-a-given-point-lies-inside-a-polygon/
// 1) Draw a horizontal line to the right of each point and extend it to infinity
//
// 1) Count the number of times the line intersects with polygon edges.
//
// 2) A point is inside the polygon if either count of intersections is odd or
//    point lies on an edge of polygon.  If none of the conditions is true, then
//    point lies outside.
