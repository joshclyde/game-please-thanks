import { useFormInput } from "@Redux";

export const FORM_ID = `usersSearchForm`;

export const ID = {
  SEARCH_TERM: `searchTerm`,
};

export const useFormSearchTerm = () => useFormInput(FORM_ID, ID.SEARCH_TERM);

export const QUERY_PARAM = {
  SEARCH_TERM: `searchTerm`,
  PAGE: `page`,
};

export interface SearchParams {
  searchTerm?: string;
  page: number;
}

export const makeSearchUrl = ({ searchTerm, page }: SearchParams) => {
  const searchParams = new URLSearchParams();
  searchTerm != null &&
    searchTerm.trim() !== `` &&
    searchParams.append(QUERY_PARAM.SEARCH_TERM, searchTerm);
  searchParams.append(QUERY_PARAM.PAGE, String(page));
  return `/users?${searchParams.toString()}`;
};
