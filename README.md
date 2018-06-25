# Aplicativo Losas
TPO Inteligencia Artificial

## Comienzo
Para la ejecucion del aplicativo se debe tener encuenta las siguientes instrucciones

### Prerequisitos
Maven: version >= 3.0

Java: version >= 1.8

NodeJS: version >= 8.0

### Compilacion
Se debe descargar las dependencias tanto de la parte web como de la parte del server

Para la parte web se debe ingresar a la carpeta losas-web
```
cd losas-web
```

Y ejecutar el comando
```
npm install
```

Para la parte del server se debe ingresar a la carpeta losas-server
```
cd losas-server
```

Y ejecutar el comando
```
mvn clean install
```
### Ejecucion
Para la parte web
```
cd losas-web
```
```
npm start
```

Para la parte server
```
cd losas-server
```
```
mvn spring-boot:run
```

### Prueba
Se utiliza una base de datos local en modo de un archivo que al ejecutar el modo server, se crea y se elimina al terminar su ejecucion

La prueba se realiza en el localhost:8080 para el servidor y localhost:3000 para la parte web (Cliente)
