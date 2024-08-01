import type { Metadata } from "next";
import HeroBanner from "@/components/hero-banner";
import HeroBannerSecond from "@/components/hero-banner-sec";
import CategoriesButton from "@/components/categories-button";
import { eventCategories } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Social Connections: Search",
  description: "Social Connections: Search what type of event you want",
};

// async function getData() {
//   const res = await fetch(
//     `https://www.eventbriteapi.com/v3/categories/?token=${process.env.EVENTBRITE_API_KEY}`
//   );

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   const apiRes = res.json();

//   return apiRes;
// }

// async function localApiGET() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/test`);

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   const apiRes = res.json();

//   return apiRes;
// }

// async function localApiPOST() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/test`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch data123");
//     }

//     return res.json();
//   } catch (e) {
//     return {};
//   }
// }

async function externalApiGraphql() {
  let graphql = JSON.stringify({
    query: `  {
      countries {
        name
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
    const res = await fetch(
      "https://countries.trevorblades.com/graphql",
      requestOptions
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data123");
    }

    return res.json();
  } catch (e) {
    return {};
  }
}

async function getTicketMasterCategoriesData() {
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/classifications?apikey=${process.env.TICKETMASTER_API_KEY}&locale=*`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data239");
  }

  const apiRes = res.json();

  return apiRes;
}

async function externalApiMeetupAPIGraphql() {
  let graphql = JSON.stringify({
    query: ` {
    event(id: "302214509") {
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

export default async function Home() {
  // const data = await getData();

  // const respApi = await localApiGET();
  // console.log("Response: ", respApi);

  // const respApiPOST = await localApiPOST();
  // console.log("Response-POST: ", respApiPOST);

  const respApiGraphql = await externalApiGraphql();
  // console.log("Response-POST-GRAPHQL: ", respApiGraphql?.data);

  const respApiGraphqlMeetupAPI = await externalApiMeetupAPIGraphql();
  console.log(
    "Response-POST-respApiGraphqlMeetupAPI: ",
    respApiGraphqlMeetupAPI?.data
  );

  const categoriesData = await getTicketMasterCategoriesData();

  const responseArrCategories = categoriesData?._embedded?.classifications
    .map((cat: any) => ({
      label: cat?.segment?.name,
      id: cat?.segment?.id,
      href: cat?.segment?.name.replaceAll(" ", "_").toLowerCase(),
    }))
    .filter((cat: any) => cat.label !== undefined);

  return (
    <>
      {/* Main Hero Banner */}
      <main className="flex min-h-[80vh] flex-col items-center justify-between p-24 relative">
        {/* ---------------- HeroBanner Section ----------------------- */}
        {/* <HeroBanner /> */}
        <HeroBannerSecond />
        {/* ---------------- Categories Section ----------------------- */}
        {/* <section id="categories" className="flex flex-wrap justify-start items-center gap-8 bg-sky-900 w-full p-8">
        <div>
          <h2>Find what you are looking for</h2>
          <p>Select categories and we would find best events for you</p>
        </div>
        {eventCategories.map((event) => (
          <CategoriesButton
            key={event.id}
            label={event.label}
            href={event.href}
          />
        ))}
      </section> */}
      </main>

      {/* ---------------------- Categories of Events --------------------- */}
      <section
        id="categories"
        className="flex flex-wrap flex-col justify-start items-center gap-8 bg-themeBG/90 w-full p-8"
      >
        <div>
          <h2 className="text-black">Find what you are looking for</h2>
          <p className="text-black">
            Select categories and we would find best events for you
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4">
          {responseArrCategories?.map((event: any) => (
            <CategoriesButton
              key={event.id}
              label={event.label}
              href={`/events?search=${event.href}`}
            />
          ))}
        </div>
        {/* <div>Sample Data: {respApi?.message}</div> */}
        {/* <div>POST Req Data: {respApiPOST?.message}</div> */}
        <div>
          <p className="text-black" id="meetup">
            {respApiGraphqlMeetupAPI?.data?.event?.title}
          </p>
        </div>
        <div>
          {respApiGraphql?.data?.countries?.map((item: any) => {
            return <p key={item.name}>{item.name}</p>;
          })}
        </div>
      </section>
    </>
  );
}
