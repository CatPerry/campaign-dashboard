# Campaign Dashboard

## Technologies Used

- React
- React Router
- Semantic UI
- GraphQL & Apollo for easy CRUD
- TODO: Redux, Jest/Enzyme

## Scenarios

- User can: Preview Unsent Campaigns DONE

  - stats === null
  - status === 'Preview'

- User can: View Sent Campaigns DONE

  - stats !== null
  - stats.sent
  - stats.clicked

- User can: Create new campaign

  - Live preview as you edit
  - Can add media (picture/GIF)
  - Include tags {shop_link}, {first_name}, and {shop_name}
    - TODO: these should be a value that clickable on the page and is appended to the virtual DOM
  - Can select a target segment from a dropdown

- User can: Edit a Preview Campaign

## Tests

- TODO: Add Jest/Enzyme
- Test form input and submission
- Test sad path for form submission
- Test Redux action called on form submission
- Test Redux action called while editing
- Test on specific URL with React Router that correct campaigns displayed
