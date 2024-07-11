// You have a user registration form. Sometimes you need to pre-fill the form with the user's data to update his profile. However, you don't always need to fill in all the fields. For example, the user may want to update only his email and password, leaving the first and last name unchanged.

// Using the Partial utility and generics, correct the type of the function parameter to avoid typing errors.

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: User) {

// }

// createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) :User {  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...defaultUser, ...initialValues };
}


createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
export {};
