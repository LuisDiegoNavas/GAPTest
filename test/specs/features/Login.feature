Feature: Create users

    Background:
        Given The login page

    @Test
    Scenario: TC01 - Validate Create a new user and deleted it as Admin
        When I login as Admin user
        Then I validate welcome icon is present
        And  I validate user name is correct

        #Verificar que usuario navegó a home page validando los siguientes elementos por css selector: 
        #<banner de que el usuario se logueo satisfactoriamente> 
        #3. Crear un nuevo usuario  llamado "James Smith", con identificación '1234567890', fecha de ingreso '21-01-2014' y siendo el nombre del líder igual al suyo (para identificar su empleado). 
        #4. Darle click al botón save usando css selector 
        #5. Validar por medio de una lista que los campos agregados del usuario se encuentren en la tabla de usuarios 
        #6. Devolver la fila en la que ese usuario se encuentra en la tabla  
        #7. Eliminar el usuario. 
        #8. Validar que el usuario ya no aparezca en la fila. 