const checkout = async (items) => {
  await fetch("http://localhost:3000/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  });
  //   .then(async (res) => {
  //     const response = await res.json();
  //     router.push(response.url);
  //   });
};

export { checkout };
