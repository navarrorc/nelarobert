import moment from "moment";
import $ from "jquery"; // Cheat Sheet: bit.ly/2dq090t

var rightNow = moment().format("MMMM Do YYYY, h:mm:ss a");

console.log(rightNow);
// "October 23rd 2016, 9:30:24 pm"
