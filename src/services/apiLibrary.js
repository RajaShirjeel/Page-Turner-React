const BASE_URL = "http://localhost:3000";

async function getBooks() {
  const res = await fetch(`${BASE_URL}/books`);

  if (!res.ok) throw new Error("Could not fetch the books please try again");

  const data = await res.json();

  return data;
}

async function getBook(id) {
  const res = await fetch(`${BASE_URL}/books/${id}`);

  if (res.status === 404) throw new Error(`No book found with given id ${id}`);

  if (!res.ok) throw new Error("Could not get the book, please try again");

  const data = await res.json();

  return data;
}

async function getLoan(id) {
  const res = await fetch(`${BASE_URL}/loans/${id}`);

  if (res.status === 404) throw new Error(`No loan found with given id ${id}`);

  if (!res.ok) throw new Error("Could not get the loan, please try again");

  const data = await res.json();

  return data;
}

async function createLoan(data) {
  const res = await fetch(`${BASE_URL}/loans`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error while creating the loan");

  const newLoan = await res.json();
  return newLoan;
}

async function extendLoan(id, updatedFields) {
  const res = await fetch(`${BASE_URL}/loans/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });

  if (!res.ok) throw new Error("Could not extend the loan");

  const newLoan = await res.json();
  return newLoan;
}

export { getBook, getLoan, getBooks, extendLoan, createLoan };
