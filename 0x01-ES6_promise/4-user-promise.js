<<<<<<< HEAD
function signUpUser(firstName, lastName) {
    return Promise.resolve(
      {
        firstName,
        lastName,
      },
    );
  }
  
=======
// resolved promise return
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
>>>>>>> a2b6915cbb0d43589763be9773393d5dc92a38fe
