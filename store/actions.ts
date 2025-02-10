import { AppDispatch } from "./store";
import { setUser, setLoading, setError } from "./reducers";
import { User } from "./types";

export const fetchUser = (userId: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));

    // Simulasi API call
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data: User = await response.json();

    dispatch(setUser(data));
  } catch (error) {
    dispatch(setError("Gagal mengambil data pengguna"));
  } finally {
    dispatch(setLoading(false));
  }
};
