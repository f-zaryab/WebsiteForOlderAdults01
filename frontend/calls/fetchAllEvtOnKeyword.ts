const gqlFetchAllEventOnKeyword = async (
  keyword: string,
  sortField: "RELEVANCE" | "DATETIME"
) => {
  let key = keyword || "popular";
  let sortFieldType = sortField || "RELEVANCE";

  // Currently, events with Dundee as center point are only fetched
  let graphql = JSON.stringify({
    query: `{
  keywordSearch(
    filter: {query: "${key}", lat: 55.3781, lon: 3.4360, radius: 500, source: EVENTS}
    input: {first: 50}
    sort: {sortField: ${sortFieldType}}
  ) {
    count
    edges {
      cursor
      recommendationSource
      node {
        id
        result {
          ... on Event {
            title
            venue {
              name
              city
              country
            }
            eventUrl
            eventType
            imageUrl
            description
            dateTime
            going
            shortDescription
            maxTickets
            timeStatus
            priceTier 
            isFeatured
            ratings {
              average
              total
            }
            going
            waiting
            topics {
              count
              edges {
                node {
                  name
                  id
                  urlkey
                }
              }
            }
          }
        }
      }
    }
  }
}
`,
    variables: {},
  });

  let requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: graphql,
  };

  try {
    const res = await fetch("https://api.meetup.com/gql", requestOptions);

    if (!res.ok) {
      throw new Error("Failed to fetch data123");
    }

    return res.json();
  } catch (e) {
    return {};
  }
};

export default gqlFetchAllEventOnKeyword;
