---
title: Assignment 3
layout: doc
---
# Assignment 3: Convergent Design 
September 20 2024

# 1. Pitch 

Feeling disconnected after graduation? Tired of meeting people online through apps, only to be ghosted? Looking for something fun to do on the weekends? 

Eventure is your all-in-one app for building real connections, meeting new people, and sharing hobbies through in-person gatherings. Designed to help you find and create communities around your interests, Eventure makes it easy to chat, like, and share posts with others in your group. You can create or attend events, and explore new activities based on your personal interests. 

Want to try something new or meet people nearby?  Use the personalized feed to discover events that match your interests, or find events near you with a simple location search. Whether you're looking for a fun weekend plan or a spontaneous adventure, Eventure gets you off the screen and out into the world—connecting with people and enjoying new experiences.
With Eventure, making friends and discovering new passions is as easy as opening the app.

# 2. Functional Design 

## Concept 1
### Name: Inviting[User, Event]

### Purpose: 
Facilitate user invitations to events 


### Operational Principle: 
Users send event invites to contacts, who can accept or decline. Their response status is tracked.

### State: 
- invitations: Invite -> one User, one Event
- status: Invite -> one of {sent, accepted, rejected}. 

### Actions: 
- Send invite(s)
- Track responses


## Concept 2
### Name: MoodSyncing[User, Event, Mood]
### Purpose: 
Provide event recommendations based on user's selected mood.

### Operational Principle: 
Users choose their mood from a predefined set, and events recommendations are adjusted accordingly.


### State: 
- mood: Mood -> set{ Mood A, Mood B, Mood C, etc}.
- userMood: User --> one Mood.
- recommendations: User, Mood -> set Event.

### Actions: 
- Set mood
- Display event recommendations


## Concept 3

### Name: Events[User]

### Purpose:
Manage event creation, and participation

### Operational Principle: 
 Users can create events, join them, and manage details such as time, location, and type.

### State: 
- details: Event -> (Time, Location, Type)
- attendees: Event -> set User
- tags: Event -> set many Tags (including mood-based tags)
- status: Event -> one of {upcoming,ongoing,compleded, canceled}.

### Actions: 
- Users can create or attend events
- Users can update event details
- Attendees can marke themselves present or provide feedback

## Concept 4

### Name: Event Attending Streak[User,Event,Tag]
### Purpose: 
 Reward users for consecutive event attendance with different badges based on event categories.

### Operational Principle: 
Users build streaks by attending events in the same category, earning category-based badges. 


### State: 
- streak: User, Tag -> integer
- badges: User, Tag -> set Badge

### Actions: 
- Track streak per event tag 
- Award a category-based badge.


## Concept 5: 

### Name: Event Upvoting[User, Event] 

### Purpose: 
Let users upvote events to highlight the most popular ones.
### Operational Principle: 
Events with the most upvotes rise higher in rankings, combined with event attendance.
### State: 
- upvotes: Event -> integer
- ranking: Event -> integer
- attendees: Event -> set User

### Actions: 
Rank events based on a combination of upvotes, and attendance
Display ranked events by upvotes, and attendance 


## Synchronizations 
### createEventAndInvite: 
Combines event creation with the ability to invite participants 

Explanation:
When the user creates an event, they can immediatley invite others to participate, synchronizing event creation with the invitation process.

### setMoodAndRecommend: 
Syncs mood selection with personalized event recommendations

Explanation: Synchronizes mood setting with event recommendations, ensuring that user receive personalized event suggestions based on their current mood.

### trackAttendanceAndReward: 
Tracks attendance streaks and rewards based on both upvotes and attendance

Explanation: Badges serve as rewards for consistent interaction with events. Synchronizing ensures that users progress is continously updated and encouraged.

### upVoteAndRankEvents:
Integrates user voting with event ranking based on upvotes and attendance. 

Explanation: Both the upvotes (feedback from users) and attendance (participation) indicate how popular events are which when higlighting these events can boost visibility and engagement. 


app Eventure
  
        include Inviting [User, Event]
        include MoodSyncing [User, Event, Mood]
        include Events [User]
        include EventAttendingStreak [User, Tag]
        include EventUpvoting [User, Event]

        sync createEventAndInvite (user: User, details: EventDetails, invitees: set User)
            Events.createEvent (user, details, out event)
            Inviting.sendInvite (user, invitees, event)

        sync setMoodAndRecommend (user: User, mood: Mood)
            MoodSyncing.setMood (user, mood)
            MoodSyncing.recommendEvents (user, mood, out events)

        sync trackAttendanceAndReward (user: User, tag: Tag)
            EventAttendingStreak.trackStreak (user, tag)
            EventAttendingStreak.awardBadge (user, tag)

        sync upvoteAndRankEvents (user: User, event: Event)
            EventUpvoting.upvoteEvent (user, event)
            EventUpvoting.rankEvents ()


## Dependency Diagram 

![](/assets/images/dependencydiagram.jpg){:width='400'}



##  Wireframes 

The link to the Figma Prototype can be found [here](https://www.figma.com/design/LRKZAMdjYm3tZPfD8IpVXs/Untitled?node-id=0-1&m=dev&t=LLeZQI8i53KbAVf3-1)

### Mood-Syncing (and Upvoting Events)
![](/assets/images/moodsync.png){:width='300'} 

### Creating an Event 
![](/assets/images/createevent.png){:width='300'} 

### Inviting
![](/assets/images/invite.png){:width='300'} 

### Event Streaks 
![](/assets/images/eventstreak.png){:width='300'} 

### User 
![](/assets/images/profile.png){:width='300'} 



# Design Tradeoffs

### Custom Chaos vs Structured Serenity 

One tradeoff that I explored was choosing between predefined mood sets vs custom moods. While it would be great to choose from an unlimited set of moods to give users a range of expressions and hobbies, I had to decide to narrow it to a predefined mood and other categories. Predefined moods were chosen to keep recommendations relevant and consistent across users, ensuring that the app could offer focused, tailored event suggestions. Custom moods, while more flexible, could lead to mismatched recommendations and a less cohesive user experience. 

### Quick Chat vs Communities 

Another tradeoff that I explored was the connecting process for users.  I wanted to center the app's vision for meeting people offline, and believe that if communities were involved, realistically the design would involve a whole range of other features including establishing public/private events and, regardeless would still need the option to connect with users one-to-one (chat feature). Then, users are able to build those communities more naturally offline, and the app can center on catering to user's interests, offering new or relevant events first. 


### One-Click Pop-ups vs Full Settings Journey 

A key tradeoff I explored was using pop-ups for quick actions (like showcasing streaks or sending invites) versus offering a full settings menu with deeper customization options. Pop-ups provide immediate access to important information  and enhances convenience for users who want quick updates or actions. On the other hand, multiple settings offer more control and flexibility but can overwhelm users with too many options, making navigation more complex and potentially slowing down user interactions.