# API REST Selaski

Prueba técnica Backend - NestJS + Prisma + MySQL

## Descripción
API RESTful sencilla para gestión de usuarios y mensajes, usando NestJS, Prisma ORM y MySQL. Incluye validaciones con class-validator y uso de DTOs.

## Requisitos previos
- Node.js >= 18
- MySQL corriendo localmente

## Instalación
1. Clona el repositorio
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   - Copia `.env.example` a `.env` y ajusta los valores según tu entorno.

## Variables de entorno

El archivo `.env.example` contiene:
```
DATABASE_URL="mysql://root:123456@localhost:3306/api-rest-selaski"
```

## Migraciones y base de datos
1. Crea la base de datos en MySQL:
   ```sql
   CREATE DATABASE `api-rest-selaski`;
   ```
2. Ejecuta las migraciones Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```

## Correr el proyecto
```bash
npm run start:dev
```

## Endpoints principales

### Crear usuario
`POST /users`
```json
{
    "name": "Andres Correa",
    "email": "andres@gmail.com"
}
```

### Crear mensaje
`POST /messages`
```json
{
    "content": "Mensaje de prueba",
    "userId": 1
}
```

### Listar mensajes de un usuario
`GET /users/1/messages`

## Validaciones
- El email debe tener formato válido.
- El contenido del mensaje no debe estar vacío.
- Se usan DTOs y class-validator para validar los datos de entrada.
