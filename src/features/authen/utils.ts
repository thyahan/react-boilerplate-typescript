export const loginValidate = (username: string, password: string) => {
  if (username === "admin" && password === "admin") return true;
  return false;
};
