# Etapa 1: Build
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Copiamos el proyecto al contenedor
COPY Aquam /app

# Establecemos el directorio de trabajo
WORKDIR /app

# Construimos el proyecto (y saltamos tests)
RUN mvn clean package -DskipTests

# Etapa 2: Runtime
FROM eclipse-temurin:21-jre-jammy

# Creamos un directorio de trabajo en el contenedor de ejecución
WORKDIR /app

# Copiamos el JAR generado desde la etapa de build
COPY --from=build /app/target/*.jar app.jar

# Exponemos el puerto 8080
EXPOSE 8080

# Comando para arrancar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
