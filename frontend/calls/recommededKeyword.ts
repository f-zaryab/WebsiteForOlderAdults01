"use server";

import gqlFetchAllEventOnKeyword from "./fetchAllEvtOnKeyword";

export async function getRecommendedEventsFetch(keyword: string) {
  const dataEvt = await gqlFetchAllEventOnKeyword(keyword || "", "RELEVANCE");
  const responseEvents = dataEvt?.data?.keywordSearch?.edges || [];

  return responseEvents;
}
