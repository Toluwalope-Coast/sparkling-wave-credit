const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Asynchronously fetches data from a specified API endpoint.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {string} token - The Bearer token for authorization.
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 * @throws {Error} - Throws an error if the fetch operation fails.
 *
 * This function constructs a GET request to the provided endpoint, using the
 * base URL defined by `BASE_URL`. The request includes an Authorization header
 * with a Bearer token and sets the `Content-Type` to `application/json`. If the
 * response is not ok (status code outside the range 200-299), an error is thrown.
 * If the request is successful, the response is parsed as JSON and returned.
 * Any errors encountered during the fetch operation are caught, logged to the
 * console, and rethrown for further handling.
 */
export const getAllApiRequest = async (endpoint: string, token?: string) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const fullUrl = `${BASE_URL}${endpoint}`;

    const response = await fetch(fullUrl, {
      method: "GET",
      headers,
    });
    if (!response.ok) {
      const errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      // console.error(`API Error for ${endpoint}:`, errorMessage);
      throw new Error(
        `Failed to fetch data from ${endpoint} - ${errorMessage}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error(error);
    throw error;
  }
};

/**
 * Asynchronously fetches a single item from a specified API endpoint.
 * Similar to getAllApiRequest but semantically for single item retrieval.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {string} token - Optional Bearer token for authorization.
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 * @throws {Error} - Throws an error if the fetch operation fails.
 */
export const getSingleApiRequest = async (endpoint: string, token?: string) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const fullUrl = `${BASE_URL}${endpoint}`;

    const response = await fetch(fullUrl, {
      method: "GET",
      headers,
    });
    if (!response.ok) {
      const errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(
        `Failed to fetch data from ${endpoint} - ${errorMessage}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Asynchronously sends a POST request to a specified API endpoint.
 *
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {Object} body - The request body data to send.
 * @param {Record<string, string>} headers - Optional additional headers (e.g., Authorization).
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 * @throws {Error} - Throws an error if the request fails.
 */
export const postApiRequest = async (
  endpoint: string,
  body: Record<string, any>,
  headers?: Record<string, string>
) => {
  try {
    const requestHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      ...headers,
    };

    const fullUrl = `${BASE_URL}${endpoint}`;

    const response = await fetch(fullUrl, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(
        `Failed to post data to ${endpoint} - ${errorMessage}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Asynchronously sends a PATCH/PUT request to a specified API endpoint to update data.
 *
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {string | undefined} token - The Bearer token for authorization.
 * @param {Object} body - The request body data to send.
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 * @throws {Error} - Throws an error if the request fails.
 */
export const updateApiRequest = async (
  endpoint: string,
  token: string | undefined,
  body: Record<string, any>
) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const fullUrl = `${BASE_URL}${endpoint}`;

    const response = await fetch(fullUrl, {
      method: "PATCH", // Using PATCH for partial updates like profile image/gender
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(
        `Failed to update data at ${endpoint} - ${errorMessage}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};