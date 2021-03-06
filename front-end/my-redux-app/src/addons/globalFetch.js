async function globalFetch(baseUrl, method, body) {
  let token = localStorage.getItem("token");

  if (token !== null) {
    token = "Bearer " + token;
    let res = await fetch(baseUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    console.log("response", res);
    return res;
  }
}
export default globalFetch;
