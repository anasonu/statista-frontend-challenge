### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## About the Challenge

The library used for this challenge is called TREMOR.
[Tremor Library Link](https://www.tremor.so/)

## GRID

The main page is divided in 3 sections.

* Section 1 -> It's situated on the top of the grid and contains the filters
* Section 2 -> Located on the left of the grid and contains the list of items (BBQs)
* Section 3 -> Located on the right of the grid and contains the reviews graphics and the main points

### Filters

The user can filter by Brand and Device Type. As an example for other possibilities, a Price filter is shown although it is disabled due to lack of time for developing.

Each filter is multiselection type, so the user can select different brands at the same time as well as different Device-types. The list of items shows every item in the database (JSON in this case) until a filter is selected which, at that point, the list will only show the filtered items.


### List

The user can only select one item at a time. In the future, they'll be able to select 2 or 3 to make comparisons in a different page. This functionality couldn't be finished due to lack of time.

Right now, the user can click on one item and new information will be shown in the next section.


### Reviews

When an item is selected, the reviews of that specific item will be shown in section 3. The reviews are represented with Bar Chart, each bar for a specific number of stars in the review.

There are also different cards with other evaluations of the product such as Quality, Design, Service, etc. This information is taken from the database as well. When the number is over 50% the card turns green, and if the number is lower than that, the card will turn orange.

## Future functionalities

The main functionality that wasn't finished is the comparison page. In this page, the main idea was to show a table that would be similar as the one they use at Apple ([Apple comparison page](https://www.apple.com/es/mac/compare/)) so the user could compare up to 3 items.
