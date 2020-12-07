import { useLocation } from "react-router-dom";

/*
  http://localhost:8080/status
  #access_token=BQAxNrDSkcqL9WBENkz40-K9YTaLZs5t5yoWYYQe4hK8siTNhTl1iM98RS93PG3g7QY-Opq6tzomx_6D5BKZ2V7N_ueRI1EXsOhm1wMfQQevUXKTS_icHpbST35V_YGGBwtVFrdjJ-zX5XzLpegnC7RpVZpD_XrH7xrssMmW73iiy8iWUtUQ5-w1BsHGAL9RaxJqm5RlCG3Z9FYXZmY91aIqIWwJVnHyEYFy0Jn7cAOLhNWlNwE_9izsTiNl-TZ4Vcp1AzPcaR-MDr3qgAz1m3g
  &token_type=Bearer
  &expires_in=3600
*/

export const useGetAccessTokenFromUrl = () => {
  const hash = useLocation().hash;
  // TODO: there's probs a better way for me to parse this, but for now should work
  return hash.split(`&`)[0].split(`=`)[1];
};
