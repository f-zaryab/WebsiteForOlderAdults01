const gqlFetchSpecificEvent = async (event: string) => {
  let speEvent = event || "302214509";

  let graphql = JSON.stringify({
    query: `{
  event(id: "${speEvent}") {
    title
    description
    isFeatured
    dateTime
    duration
    eventUrl
    isOnline
    onlineVenue {
      type
      url
    }
    eventType
    venue {
      venueType
      name
      address
      city
      postalCode
      country
    }
    imageUrl
    hosts {
      name
      memberPhoto {
        source
      }
      isOrganizer
      isAdmin
      hostedEvents {
        count
        edges {
          node {
            id
            title
          }
        }
      }
    }
    group {
      name
      description
      link
      stats {
        memberCounts {
          all
        }
        eventRatings {
          average
          total
        }
      }
    }
    maxTickets
    timeStatus
    priceTier
    fees {
      processingFee {
        type
        amount
      }
      serviceFee {
        type
        amount
      }
      tax {
        type
        amount
      }
    }
    taxType
    guestsAllowed
    attendingTicket {
      quantity
    }
    ratings {
      average
      total
    }
    networkEvent {
      rsvpCount
      groupCount
    }
    status
    going
    waiting
    eventType
    timeStatus
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
    feeSettings {
      amount
      currency
      required
      accepts
    }
    reasonsForJoining
    venues {
      name
      address
    }
    attendeeInsights {
      ... on IncompleteAttendeeInsights {
        firstTimers
      }
      ... on MemberAttendeeInsights {
        firstTimers
      }
      ... on SubscriberAttendeeInsights {
        firstTimers
        commonAge
      }
    }
    comments(offset: 0, limit: 50, sortOrder: ASC) {
      count
    }
    rsvpSettings {
      rsvpOpenTime
      rsvpsClosed
    }
    rsvpState
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
};

export default gqlFetchSpecificEvent;
