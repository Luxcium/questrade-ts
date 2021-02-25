"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logData = void 0;
const logData = (response) => {
    const { config, data, headers, status, statusText } = response;
    // cONSOLE: using console info is a sideEffect and will be flagged
    console.info('status ==============================');
    console.info(status, statusText);
    console.info('');
    console.info('data ==============================');
    console.info(data);
    console.info('');
    console.info('config ==============================');
    console.info(config);
    console.info('');
    console.info('Account calls 30 per seconds 30000 per hour ');
    // 30(per sec) *X* 60 (sec per minute) = 108'000 slots per hours (can use 27%)
    // 500 per minutes 8.3 per seconds 25 each 3 seconds
    console.info('Market Data calls 20 per seconds 15000 per hour ');
    // 20(per sec) *X* 60 (sec per minute) = 72'000  slots per hours (can use 20%)
    // 250 per minutes 4.16 per sec 25 per 6 seconds
    console.info('headers ==============================');
    console.info(headers);
};
exports.logData = logData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9wcml2YXRlL2NvcmUvcmVxdWVzdFBlclNlY29uZExpbWl0L2xvZ0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxPQUFPLEdBQUcsQ0FBSSxRQUEyQixFQUFFLEVBQUU7SUFDeEQsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFFL0Qsa0VBQWtFO0lBRWxFLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUNwRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDN0QsOEVBQThFO0lBQzlFLG9EQUFvRDtJQUNwRCxPQUFPLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUM7SUFDakUsOEVBQThFO0lBQzlFLGdEQUFnRDtJQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUM7QUF0QlcsUUFBQSxPQUFPLFdBc0JsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGxvZ0RhdGEgPSA8VD4ocmVzcG9uc2U6IENsaWVudFJlc3BvbnNlPFQ+KSA9PiB7XG4gIGNvbnN0IHsgY29uZmlnLCBkYXRhLCBoZWFkZXJzLCBzdGF0dXMsIHN0YXR1c1RleHQgfSA9IHJlc3BvbnNlO1xuXG4gIC8vIGNPTlNPTEU6IHVzaW5nIGNvbnNvbGUgaW5mbyBpcyBhIHNpZGVFZmZlY3QgYW5kIHdpbGwgYmUgZmxhZ2dlZFxuXG4gIGNvbnNvbGUuaW5mbygnc3RhdHVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICBjb25zb2xlLmluZm8oc3RhdHVzLCBzdGF0dXNUZXh0KTtcbiAgY29uc29sZS5pbmZvKCcnKTtcbiAgY29uc29sZS5pbmZvKCdkYXRhID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICBjb25zb2xlLmluZm8oZGF0YSk7XG4gIGNvbnNvbGUuaW5mbygnJyk7XG4gIGNvbnNvbGUuaW5mbygnY29uZmlnID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICBjb25zb2xlLmluZm8oY29uZmlnKTtcbiAgY29uc29sZS5pbmZvKCcnKTtcbiAgY29uc29sZS5pbmZvKCdBY2NvdW50IGNhbGxzIDMwIHBlciBzZWNvbmRzIDMwMDAwIHBlciBob3VyICcpO1xuICAvLyAzMChwZXIgc2VjKSAqWCogNjAgKHNlYyBwZXIgbWludXRlKSA9IDEwOCcwMDAgc2xvdHMgcGVyIGhvdXJzIChjYW4gdXNlIDI3JSlcbiAgLy8gNTAwIHBlciBtaW51dGVzIDguMyBwZXIgc2Vjb25kcyAyNSBlYWNoIDMgc2Vjb25kc1xuICBjb25zb2xlLmluZm8oJ01hcmtldCBEYXRhIGNhbGxzIDIwIHBlciBzZWNvbmRzIDE1MDAwIHBlciBob3VyICcpO1xuICAvLyAyMChwZXIgc2VjKSAqWCogNjAgKHNlYyBwZXIgbWludXRlKSA9IDcyJzAwMCAgc2xvdHMgcGVyIGhvdXJzIChjYW4gdXNlIDIwJSlcbiAgLy8gMjUwIHBlciBtaW51dGVzIDQuMTYgcGVyIHNlYyAyNSBwZXIgNiBzZWNvbmRzXG4gIGNvbnNvbGUuaW5mbygnaGVhZGVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgY29uc29sZS5pbmZvKGhlYWRlcnMpO1xufTtcbiJdfQ==