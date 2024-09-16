# Dev10Capstone

## Problem Statement

I have always been fascinated by Natural Language Processing (NLP) and I think there are many people out there who are interested in it too. However, there isn’t any accessible or well known website that can introduce the basics of NLP to non-tech people. This field of AI can be difficult to understand without a prior understanding of Artificial Intelligence or knowledge of computers and human language. NLP is such a fascinating subtopic of computer science, and more importantly fun to tinker with! I want to share my passion for Natural Language Processing with the general public, and especially the next generation of potential computer scientists.

## Technical Solution

I will create an application for teaching people about NLP in an accessible and fun way. 

Scenario 1

Kid Billy is interested in technology! But learning about AI and ML isn’t very accessible to learn about if you’re not experienced in Computer Science already. Using my website, he can visit educational pages introducing him to the concepts of NLP. Using the Explore NLP page, he can try out different sentiment analysis and cosine similarity tools to noodle around with NLP with his newfound knowledge. In the *Stories* section, he can find explore different popular short stories or documents with sentiment analysis (using the database we’ve created).

## Important Terms

Natural Language Processing (NLP): The ability of computers to understand, interpret, and respond to human language.

Artificial Intelligence (AI): The simulation of human intelligence by machines to perform tasks like decision-making, learning, and problem-solving.

Machine Learning (ML): A branch of AI where computers learn from data and improve their performance over time without being explicitly programmed.

Cosine Similarity: A measure of similarity between two text documents based on their angle in a multi-dimensional space, often used to compare text content.

Sentiment Analysis: The process of determining the emotional tone (positive, negative, neutral) of a piece of text.

Accessibility: The design of products, services, or environments to be easily usable and accessible by everyone, regardless of their abilities, disabilities, or other barriers. It ensures that all people have equal access to information, opportunities, and experiences.

Stories: Pieces of text stored in a SQL database to be examined with NLP.

Authors: Authors of the stories, also stored in the database.

Category: Category of the stories, ie. document, short story, book.

Users: Users/Admin allowing CRUD operations for stories and authors.

## High Level Requirements

Use NLP Tools/View Stories (No Login Required)

Add a Story (User, Admin)

Add an Author (User, Admin)

Edit a Story (User, Admin)

Edit an Author (User, Admin)

Delete a Story (Admin)

Delete an Author (Admin)

## User Stories

Use NLP Tools/View Stories 

Use checkboxes and text boxes in the browser to experiment with NLP results.

Add a Story

Data: 
Title
Description (optional)
Text
Author
Year?
Category

Precondition: User must be logged in with Member or Admin role.

Postcondition: Author must already exist. Story must not exist yet.

Add an Author

Data: 
Name
Description (Optional)

Precondition: User must be logged in with Member or Admin role.

Postcondition: Author must not exist yet.

Edit a Story

Data: 
Title
Description (optional)
Text
Author
Year?
Category

Precondition: User must be logged in with Member or Admin role.

Postcondition: Author must already exist. Story must already exist.

Edit an Author

Data: 
Name
Description (Optional)

Precondition: User must be logged in with Member or Admin role.

Postcondition: Author must exist.

Delete a Story

Precondition: User must be logged in with Admin role.

Postcondition: Author must already exist. Story must already exist.

Delete an Author


Precondition: User must be logged in with Admin role.

Postcondition: Author must exist.

## Additional Comments

I would plan to not have an option to “create a new user/admin” on the website. Instead for this website I am imagining a contact us/apply for new user form (stretch goal?)
