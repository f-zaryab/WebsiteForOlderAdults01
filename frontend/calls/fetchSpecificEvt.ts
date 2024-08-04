const gqlFetchSpecificEvent = async(event: string) => {
    let speEvent = event || '302214509';

    let graphql = JSON.stringify({
      query: ` {
      event(id: "${speEvent}") {
        title
        description
        dateTime
        eventUrl
        isOnline
        hosts {
          name
        }
      }
    }`,
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

   
  }

export default gqlFetchSpecificEvent;