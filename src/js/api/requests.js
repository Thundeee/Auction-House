import { apiUrl } from "./constants.js";

const POST = async (arg) => await makeRequest({ ...arg, method: "POST" });
const DELETE = async (arg) => await makeRequest({ ...arg, method: "DELETE" });
const GET = async (arg) => await makeRequest({ ...arg, method: "GET" });
const PUT = async (arg) => await makeRequest({ ...arg, method: "PUT" });

const makeRequest = async ({ url, body, headers = {}, method }) => {
  const response = await fetch(`${apiUrl}${url}`, {
    method,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  });
  console.log(response);
  if (method == "DELETE") {
    return response;
  } 
  const json = await response.json();
  return { json, response };
};

export { POST, DELETE, GET, PUT };
