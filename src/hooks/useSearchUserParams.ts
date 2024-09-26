import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const useSearchUserParams = () => {
  const queryName = "q";
  const [searchParams] = useSearchParams();
  const urlParams = new URLSearchParams(searchParams);
  const location = useLocation();
  const navigate = useNavigate();

  const query = urlParams.get(queryName) || "";

  const updateParam = (query?: string) => {
    const urlParams = new URLSearchParams(searchParams);

    if (query) {
      urlParams.set(queryName, query);
    } else {
      urlParams.delete(queryName);
    }

    const newUrl = `${location.pathname}?${urlParams.toString()}`;

    navigate(newUrl);
  };

  return { query, updateParam };
};
