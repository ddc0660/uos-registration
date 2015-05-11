# University of Scouting Registration

## Version

0.1

## Background

University of Scouting is a one day training event for youth and adult scouts. It's run like one day of high school. The day is 8 periods long. Students can register for which classes to take in those 8 periods, but specific classes are only offered at certain periods. Aproximately 350 students will register for University each year.

### History

This event has occurred for several years running. The existing system is cobbled together and very manually driven. Students select preferences for each period. Those preferences are downloaded into a spreadsheet and the admin slides students into their highest prefererred classes on a first come, first served basis. Student's schedules are not confirmed until the day of the event where they learn which courses they'll be taking. Depending on the popularity of a given course, students may be seated in courses that they ranked lower, or not at all!

## Functional Requirements

There are two types of user: student and admin. Students can be either youth or adult.

There are multiple steps to the registration process. These are the minimum viable requirements for registration...

1. Personal & contact information for person registering (at the keyboard)
  * Name
  * Address
  * Email
  * Phone number
  * Unit type (Pack, Crew, Troop, Ship)
  * Unit number

2. Personal information for the student
  * Name (may be the same as prior step)
  * Youth / Adult

3. Select one course per period

   Course selection should prevent students from registering for overlapping courses. Some courses are offered multiple times. Some courses are offered for multiple periods (aka "double block" or "full morning block").
   
4. Confirm schedule (aka Checkout)

   Students should be presented with a finalized schedule on screen. The same information should be emailed to the person registering. Included in the confirmation should be whatever information will be used for the Doubleknot integration (more on this below).

If time permits, the additional enhancements to the registration process are desirable. Not in any order.

 - Adding the course catalog with full descriptions 
 - Confirm email contact with an email confirmation message prior to permitting registration
 - Allowing students to revisit their prior registration to update their course selection
 - Creating a waitlist system to notify students if a course becomes available
 - Ability to cancel a course, notify students, and allow them to update their selections
 - Register multiple students in one session
 - Limit course selection based on youth/adult selection
 - Build support for instructors taking courses

   Instructors have, in the past, been able to take courses on the periods they are not teaching. Obviously they should not be able to register for another course during the period(s) they are scheduled to teach. And their registration for the courses they teach should not take away from the max course size.

Admins have limited behavior during the registration period, particularly since I (Dave) believe I will be able to manually manipulate the data store to correct problems/issues. A comprehensive UI for admin functionality is a secondary concern. That said, there are some things that would be desirable given time...

 - See all registrations
 - Export registrations to a csv or excel
 - Edit an existing registration
 - Manipulate courses (add, edit, delete)
 - Generate a schedule for all students
 - Generate a check-in report
   
   Internet connectivity on the day of the event is not expected. As students arrive, they'll report to a check-in booth for their final schedule, evaluation forms, goodie bag, and building map

## Technology

No particular platform has been decided for implementation or hosting of this system. Factors for selection of a platform should be primarily..

1. Ease of implementation
2. Ease of hosting

The implementation should be supported by current browser versions with limited effort to support older versions of IE.

### Integrations

Doubleknot

## Future Considerations

These ideas are not in a particular order.

