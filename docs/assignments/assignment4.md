---
title: Assignment 4
layout: doc
---

# Assignment 4: Backend Deisgn and Implementation
October 2, 2024 (Updated October 11, 2024)


Since last time I worked on my convergent design and milestone for the back-end implmentation, I made changes to my concepts to cover both the breadth and depth of my ideas. Here are the changes I made: 

1. I removed the Inviting concept to make my application more concise and allow for more room to develop my Events concept. 

New Concepts: 

        RSVP’ing [User, Event] 

Purpose: User will see how long they have been attending events.
       
Operational Principle: 
When a user attends an event (`attend (u, e)`), their streak is incremented if it’s a consecutive event.
If the user does not attend an event, their streak is reset:`attend (u, e); checkStreak (u, streak') {streak' = 0 if missed}`

        states: 
        RSVPList: Event -> Set User
        RSVPStatus: User -> Event -> Bool 

        actions: 
        rsvpForAnEvent 
            If e has space available (size of rsvpList[e] < e.capacity):
            Add u to rsvpList[e]
            Set rsvpStatus[u][e] := true
            Otherwise, return an error indicating the event is full.
        

        cancelRSVPforAnEvent 
            Remove u from rsvpList[e]
            Set rsvpStatus[u][e] := false
            If the precondition is not met, return an error indicating insufficient permissions.checkRSVPforEvent

        checkRSVP
            Retrieve rsvped as the value of rsvpStatus[u][e].



Revised Concepts: 

        Streaks[User, RSVP, Event]

 This only keeps track of the streak and no longer awards badges based on the type of events attended.    

        Tagging[User, Event, Tag, Mood]
 This concept is more generalize allowing events which allows users to tag with categories or event types, or based off of a list of predefined moods.


# 1. Abstract Data Model 

![](/assets/images/data-model.jpg){:width='600'}


# 2. Data Representation

The Milestone Deliverable: 

The link to the data modeling for my EventTagMoodSync concept can be found [here](https://github.com/ArliMoyao/backend-starter/blob/main/server/concepts/tagMoodSync.ts.ts)


The link to the data modeling for my Inviting concept can be found [here](https://github.com/ArliMoyao/backend-starter/blob/main/server/concepts/inviting.ts)

I also made some progress on the RESTful routes for the concepts above which can be found [here](https://github.com/ArliMoyao/backend-starter/blob/main/server/routes.ts)


# Design Reflections


As I began on implementing the concepts events, posting, tagging, rsvp'ing, streaks, upvoting I noticed the difficulty in making sure each user-facing flow is reflected in my synchronizations fully. Writing out the syncs between concepts allowed me to fully understand how each concept relates to one another, and see the additional loopholes that came up when there was unclarity in the user flow. For example, the synchronization between rsvp’s and events showed me that additional event host controls that was needed. How would the user's streak be incremented if it relied on a user's reservation?  This is when I realized I needed to differentiate between an event attended, and event reserved. Based on this user interaction, I noticed that I needed to create an additional action where the host (needing the authentication concept) would be allowed to check if the rsvp’s showed up by marking their attendance. This fleshed out user flow also serves as an incentive for participants to show up to events that they register for. However, the complexity of this makes it hard for this to happen for larger-scale events where it would require the host to mark attendance for more participants. Some other event attendance UI’s I took into consideration were scanning a QR that only the host has access to that leads to filling out a form, or automatically marks the participants as present. I leaned towards this concept, but had difficulty on its implementation. 



