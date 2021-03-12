import { startFirebaseEventListening, getIsUserSignedIn } from "@Firebase";

import { useSetIsAuthenticated } from "./isAuthenticated/hooks";

// making sure if the hook is used twice we only listen once. this seems weird/bad?
let isListening = false;
export const useAuthListener = () => {
  const setIsAuthenticated = useSetIsAuthenticated();
  if (!isListening) {
    setIsAuthenticated(getIsUserSignedIn());
    startFirebaseEventListening(
      // TODO: I feel like this is getting fired a lot?
      () => setIsAuthenticated(true),
      () => setIsAuthenticated(false),
    );
  }
};

export * from "./isAuthenticated/hooks";
