import { parse, serialize } from "cookie";

export const saveGenderUpdateFlagToCookies = (): boolean => {
  try {
    if (typeof document === "undefined") return false; // Only run client-side

    // Set a flag to indicate that the gender has been updated
    const serializedFlag = serialize("genderUpdated", "true", {
      httpOnly: false,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 365, // 1 year duration (or adjust as needed)
      path: "/",
    });

    document.cookie = serializedFlag;
    return true;
  } catch (error) {
    console.error("Failed to save gender update flag to cookies:", error);
    return false;
  }
};

export const getGenderUpdateFlagFromCookies = (): boolean => {
  if (typeof document === "undefined") return false;

  const cookies = parse(document.cookie || "");
  return cookies.genderUpdated === "true"; // Return true if genderUpdated flag is set
};

export const deleteGenderUpdateFlagFromCookies = (): boolean => {
  if (typeof document === "undefined") return false;

  const serializedFlag = serialize("genderUpdated", "", {
    httpOnly: false,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: -1, // Set maxAge to negative to delete the cookie
    path: "/",
  });

  document.cookie = serializedFlag;
  return true;
};
