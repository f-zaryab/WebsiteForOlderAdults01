# PROJECT: Event Aggregator site for Older Adults

This is an event aggregator site, targeted for older adults. This site would list events in upcoming months. The user would be able to view list of event, details of events and bookmark the event. User can also filter events based on his preferences.
The site would be AA compliance as per W3C standards for [older adults](https://www.w3.org/WAI/older-users/developing/)

## Poject setup

## Frontend Section

1. Basic template set up via [NextJs](https://nextjs.org/docs/getting-started/installation) starter command, with typescript enabled and tailwind pre-installed for handling CSS. App router is utlised for the project.
2. Installed [ShadCn-UI](https://ui.shadcn.com/docs/installation/next) for utlisizing reusable components in the webapp.
3. File based routing is utlisied for pages and next link router is used for navigation.
4. Context-API would be used for managing webapp data for data persistence.

## Backend Section

Any thing outside frontend folder would be part of backend. A main server.js file would be used as entry point of server. The server would be used for managing user data and authentications.

## Deployment

When the app first version is completed, it would be hosted on any node-based hosting site, e.g. render. Temporarily, fontend is being hosted on versel for availability.
