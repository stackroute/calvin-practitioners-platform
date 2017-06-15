// const verifyToken = function (userToken) {
//   return new Promise((resolve, reject) => {
//     jwt.verify(userToken, 'app secret', (err, decode) => {
//       if (err) {
//         reject(err);
//       } else {
//         const refreshToken = jwt.refresh(decode, 'app secret', { expiresIn: 60 * 30 });
//       }
//     });
//   },
//     );
// };
