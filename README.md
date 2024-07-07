# Crossplaform Account Registration
**Project 1 - Google Sign In**

**Use Cases**

1. be able to Sign-In/Up with a Google Email account through browser or any mobile device.
2. be able to write in a text field once logged in.
3. have users’ entered information stored in a database and have it accessible to read and write from any device with the same account.

**Implementation**

1. Browser
    1. [JavaScript](https://www.w3schools.com/js/) to handle Sign In/Up events and crud operation with DB.
    2. [Mocha](https://mochajs.org/api/) for unit-testing.
    3. [Cypress](https://docs.cypress.io/guides/overview/why-cypress) for UI-testing
2. Mobile versions
    1. Android
        1. [Kotlin](https://developer.android.com/kotlin/first) to handle Sign In/Up events and crud operation with DB.
        2. [JUnit](https://kotlinlang.org/docs/jvm-test-using-junit.html) for Unit-Testing
        3. [Espresso](https://developer.android.com/training/testing/espresso/basics) for UI Testing
    2. iOS.
        1. [Swift](https://developer.apple.com/documentation/swift) to handle Sign In/Up events and crud operation with DB.
        2. [XCTest](https://www.swift.org/documentation/server/guides/testing.html) for Unit-Testing
3. Database Implementation
    1. [MongoDB](https://www.mongodb.com/docs/) to store user accounts and users’ text.

**AGILE Project Management**

1. [Agile - Intro](https://www.atlassian.com/agile/manifesto)
2. [Agile Epics](https://www.atlassian.com/agile/project-management/epics-stories-themes)

**Sprint 1**

***Deadline: July 20th***

[Styles and Page Layouts](https://docs.google.com/presentation/d/1kot5xOeYVSjs1yHk9h_jGxeQww6u1mEL7SP4kJKXxps/edit?usp=sharing)
>Ensure TDD (Test Driven Development) is used throughout the project lifetime.

1. Achieve front end using HTML and JavaScript\
    I. Refer to slides for design guidelines.
2. Design the User Object in complience with google sign-in utilities.
3. Using JavaScript and potentially utilizing Node.js establish connection with MongoDB.
4. Use Postman to test CRUD operations.
5. Use unit-testing to ensure correct user creation and saving.\
    I. Establish unit testing with server if possible
