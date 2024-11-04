---
title: Assignment 6
layout: doc
---

# Assignment 6: User Testing and Analysis 
November 3, 2024 (Updated Nobember 3, 2024)

| Task Title                | Instruction                                                                 | Rationale                                                                                                      |
|---------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| Create an Event           | Create a new event with a title, date, and location.                        | To test the ease of event creation and identify any usability issues in the form-filling process.              |
| RSVP to an Event          | RSVP to an existing event from the event list.                              | To evaluate the clarity and accessibility of the RSVP feature and ensure users can easily join events.         |
| Cancel RSVP               | Cancel your RSVP for an event you previously signed up for.                 | To check the intuitiveness of the cancellation process and ensure users can easily manage their RSVPs.         |
| Upvote an Event           | Upvote an event from the event list.                                        | To assess the visibility and functionality of the upvote feature, ensuring it encourages user interaction.     |
| Use the Search Bar        | Use the search bar to find a specific event by name.                        | To evaluate the search functionality and ensure it helps users quickly find relevant events.                   |

###  Despite some features not fully working, I wanted to test out the implementations of user flows as best as I could. 


## Study 1

For participant 1, I gave them a brief warning that the functionalties were not fully implemented, and that if they encountered technical results, to list out their observations of what seems to be working, and not to be working. During usability testing, the participant interacted with features like creating events, upvoting, RSVPing, and undoing RSVPs. The "Create Event" button was one of the most intuitive elements, as the participant found it easy to locate and use. Its clear labeling and positioning supported quick access to a primary action. However, while creating an event, the participany struggled to move back and forth within the interface due to  bugs, which caused alot of confusion. This issue likely reflects a gap in the app's navigation flow, where the system's response did not fully align with user expectations.For the Upvote and RSVP functions, participants had a positive experience overall. When they clicked on these buttons, a notification appeared, confirming their action and creating a sense of trust in the app's response. However, when user attempted to undo their RSVP, they noticed that the event was not immediately removed from their list of RSVPed events, which led to some frustration. While the "Undo RSVP" button was easy to find, the lack of immediate response from the system disrupted the experience. The participant expected the event to be removed right after un-RSVPing. There was a lot of moving back and forth between the event tabs because the event rsvp list was not responding. Given that there were technical issues, the issue was not able to navigate clearly as I hoped they would. Overall I noticed a lot of reassurance from the user, and questions being asked due to the technical issues.  



## Study 2 
In Study 2, Participant 2 dove into the app’s features with curiosity, testing event creation, upvoting, RSVPing, and undoing RSVPs. Even with a heads-up about possible bugs, they seemed excited to explore and shared some thoughtful feedback. Event Creation went smoothly for the most part. Participant 2 quickly found the "Create Event" button and felt it was easy to use. They completed the process without needing to backtrack but mentioned that a progress indicator or steps guide would be nice. They felt it would make the experience feel “more guided and less intimidating,” especially for new users. The Upvote and RSVP functions left a positive impression. Participant 2 found the buttons satisfying to click and liked the notification that popped up, confirming their actions. They commented that this small touch “felt reassuring” and made them feel like the app was really responsive. It added a sense of polish that they appreciated. Similar to the previous study, the searching events and canceling RSVP were much harder to navigate. Overall, Participant 2 felt that, while the app had potential, its usability issues overshadowed its strengths. They found the design somewhat intuitive but felt that the app’s bugs and lack of smooth interactions made it difficult to navigate comfortably. They suggested that without significant improvements to the interface’s responsiveness and clarity, it would be challenging for users to fully enjoy or trust the app. In their words, “It feels like it could be good, but right now it's not very user-friendly.”


## Improvements 

- Undo RSVP Lack of Immediate Feedback (Conceptual, Moderate): Users feel uncertain after undoing an RSVP since the event remains in the list without immediate confirmation; a quick confirmation message or auto-refresh would resolve this

- RSVPed Events Not Displaying Consistently (Conceptual, Major): Users expect to see their RSVPed events in a dedicated list, but inconsistencies cause them to disappear unexpectedly; ensuring reliable syncing and displaying of RSVPed events would enhance trust and usability (part of the issue was encountering backend issues with rendering the data to the front end)

- Bugs in Navigating Between Steps in Event Creation (Conceptual, Major): Navigation bugs disrupt the flow of creating events; one way of fixing this bug is by enhancing backend state management. 

