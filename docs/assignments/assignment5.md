---
title: Assignment 5
layout: doc
---

# Assignment 5: Front-end Deisgn and Implementation
October 17, 2024 (Updated October 30, 2024)

This assignment focuses on creating a fully fledged and styled reactive user interface. It will be used to integrate with the previous assignment to create a complete full-stack application. 



# 1. Heuristic Evaluation

## Usability Heuristic 

### Discoverability

Users will easily utilize the app because of the common functionality and components found in other apps similar to Eventure. For example, the app offers similar navigation patterns such as a bottom navigation bar for quick access to main features (ex. creating events, viewing their profile, and a notifications page). The app also has clear call-to-actions with buttons for key actions like creating an event, upvoting an event with a arrow pointed upwards). However, one thing that can be improved is decluttering the UI for an event listing, currently in the wireframe, there are three different types of arrows signaling different things. Looking back on this, I can further improve the discoverability by replacing the arrow icon that clicks on the event with some other familiar icon that might also be less commonly used.

### Efficiency 
The main actions by a user is creating, rsvp’ing, canceling an event. The other actions include looking through the list of events by filtering through different categories or inputting a mood that would yield a set of events associated with that mood.  The longest process for users for be the event creation process but the app will let this process be straightforward through filling out the form. Depending whether the event is a one-time or reoccurring event, I would like to streamline this process through drop-down menus such as when inputting a location, and other smaller details (capacity number inputs, data input field). Based on the wireframe, there is little knowledge on how to cancel an rsvp or even cancel an event that is being hosted by the user, to make these more clearer to the user, I will continue exploring how to make this process intuitive without overdoing it within the bottom navigation. 


## Physical Heuristic 

### Fitt's Law 
Some of the ways the user reaches interface elements is through creating the important actions like mentioned before creating an event, upvoting, larger buttons that reduce the time and effort to click on them. Other interface elements that were not included was a search bar that could be prominently located at the top of the screen, ensuring it is easy to access. Another aspect is inputting a mood from a set of predefined moods also located at the top of the page, which I would have to be cautious with how its being placed because it is also located at the top of the page, making the top of the page overcrowded, and can cause users to accidentally click on the wrong element. This is a tradeoff I will keep refining as I design the first page that users see while not leading to visual overload.


### Mapping 
In the previous design of my concepts, I included an inviting concept that would allow users to share events on the first page as one of the icons they could toggle over and displays a dialog box. This would have been a bigger issue of how to remove the visual clutter but in my newer design implementation, the design of the mood-event sync with events remains a bigger challenge of not ideally matching its functionality. Currently, it is an input box where user can select a mood from a range of preselected moods, this leaves it up for the user to pick one rather than moving between certain moods as they try to find one. A scroll option would be more ideal making the interaction more dynamic but also pose a challenge of  being overwhelming given the how many different options the user would have to browse through.

## Lingustic Heuristic

### Speak the user’s language?
Overall the wireframe displays a user interface that is similar to real interfaces of  apps especially ones that deal with event organizing/signing up such as “Create Event” and even more personable, with the “I am feeling” message. To add to this, I can focus on how to display error messages such as when trying to rsvp for an event already rsvp’d or more ways to display error messages.

### Consistency
The design maintains consistency for the listed events, with each event displayed in a rectangular box in the wireframe. However, it could present the same names, symbols, and icons in a more visually engaging way, especially as users scroll through different events.


## Reaction Components 
The design component for streaks can be found [here] (https://github.com/ArliMoyao/frontend-for-EventureApp/tree/main/client/components/Streaks) which is still in the process of being created!

## Deployment 
This is the [intial deployment](https://frontend-for-eventure-app.vercel.app/) 