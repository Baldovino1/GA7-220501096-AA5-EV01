
// Simulando una base de datos de usuarios
const fakeUserDatabase = [
    { username: 'testuser', password: 'testpass' },
  ];
  
  // Servicio de autenticación
  export const authenticateUser = (username, password) => {
    // Buscar el usuario en la base de datos simulada
    const user = fakeUserDatabase.find(
      (user) => user.username === username && user.password === password
    );
  
    // Si el usuario existe y la contraseña es correcta
    if (user) {
      return { status: 'success', message: 'Autenticación satisfactoria' };
    } else {
      // Si la autenticación falla
      return { status: 'error', message: 'Error en la autenticación' };
    }
  };
  
  // Servicio de registro
  export const registerUser = (username, password) => {
    // Verificar si el usuario ya existe
    const userExists = fakeUserDatabase.some(
      (user) => user.username === username
    );
  
    if (userExists) {
      return { status: 'error', message: 'El usuario ya existe' };
    } else {
      // Agregar el nuevo usuario a la "base de datos"
      fakeUserDatabase.push({ username, password });
      return { status: 'success', message: 'Registro exitoso' };
    }
  };
  