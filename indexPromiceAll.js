const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const fetchYsers = async () => {
  const response = await fetch(`${BASE_URL}`);
  const users = await response.json();
  console.log(users);
};

// fetchYsers();

const fetchUsers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const firstResponse = await fetch(`${baseUrl}/users/1`);
  const secondResponse = await fetch(`${baseUrl}/users/2`);
  const thirdResponse = await fetch(`${baseUrl}/users/3`);

  const firstUser = await firstResponse.json();
  const secondUser = await secondResponse.json();
  const thirdUser = await thirdResponse.json();

  console.log(firstUser, secondUser, thirdUser);
};

// fetchUsers();

const fetchUzers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3];

  // 1. Створюємо масив промісів
  const arrayOfPromises = userIds.map(async (userId) => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
  const users = await Promise.all(arrayOfPromises);
  console.log(users);
};

fetchUzers();
