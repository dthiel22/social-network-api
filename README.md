# Social Network API

## Description

This backend developement for a social network api would be useful for establishing a backend route for users to create 'thought' posts. It is ready to be paired with a front end.

## Installation

Start by running `npm i` in the integrated terminal

## Functionality

You start by being able to grab all users, a specific user, make a user, update a user, and delete a user. The same routes were made for the Thoughts as well. As is can be seen, when a thought is made, it is stored in an array under that specific user under an array. 

![image explaining the process above](./Assets/IMG1.JPG)

Another action that is accessable is the ability to edit a user and thought. As it can be seen below, User2 was updated to UPDATED-USER and thought was updated to "UPDATED THOUGHT"

![image explaining the process above](./Assets/IMG2.JPG)
![image explaining the process above](./Assets/IMG3.JPG)
![image explaining the process above](./Assets/IMG4.JPG)

All users and thoughts can be deleted by there specific id as well. Here is a [video](https://drive.google.com/file/d/1km7s61WfLGicX-u7N_LlPhnLknBFVtzX/view) showing the full functionality of the database. 



## Next Update

A weird problem I had was actually seeding data into users. I couldn't get a thought to be placed in a specifc user, however I could actually make a thought with a specific user and have the ID displayed in the array when the GET route for that user was hit (this can be seen in the video).