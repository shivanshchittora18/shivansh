'use strict';

/**
 * monday: night
 * tuesday: day
 * wedneday: day 
 * thursday : morning
 * friday: morning
 * saturday: day
 * sunday: rest
 */

let day ="monday";

switch (day) {
    case "monday": console.log("night"); break;
    case "tuesday": console.log("day");break;
    case "wednesday": console.log("morning");break;
    case "thursday": console.log("morning");break;
    case "friday": console.log("morning");break;
    case "saturday":console.log("day");break;
    case "sunday": console.log("rest");break;
}