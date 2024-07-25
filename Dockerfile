# Usa una imagen base oficial de Node.js
FROM node:22.3.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Expone el puerto que la aplicación usará
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "run", "start:dev"]
