

Proyecto Django: Sistema de Gestión de Artículos con API REST
Este proyecto es una aplicación web básica construida con Django que incluye una API REST para la gestión de artículos. Utiliza Django REST Framework para exponer la API que permite crear, leer, actualizar y eliminar artículos.

Requisitos Previos
Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes componentes:

Python 3.x
Django 5.1 (o la versión especificada en tu proyecto)
Django REST Framework
SQLite3 (opcional, solo si usas SQLite como base de datos)
Clona este repositorio en tu máquina local:


git clone https://github.com/tuusuario/tu-repositorio.git
Navega al directorio del proyecto:


cd login_web
Crea y activa un entorno virtual (opcional, pero recomendado):


python -m venv venv
source venv/bin/activate  # En Windows usa venv\Scripts\activate
Instala las dependencias del proyecto:


pip install -r requirements.txt
Instala Django REST Framework si no está en el archivo requirements.txt:


pip install djangorestframework
Asegúrate de agregar rest_framework a la lista de aplicaciones instaladas en settings.py:

python
Copy code
INSTALLED_APPS = [
    ...
    'rest_framework',
    ...
]
Migraciones de la Base de Datos
Antes de ejecutar el servidor, necesitas aplicar las migraciones a la base de datos:


python manage.py migrate
Ejecución del Servidor de Desarrollo
Después de realizar todas las configuraciones, puedes iniciar el servidor de desarrollo de Django:


python manage.py runserver
El servidor estará disponible en http://127.0.0.1:8000/.

API Endpoints
El proyecto incluye una API REST para gestionar artículos. Los endpoints disponibles son los siguientes:

GET /api/articles/ - Listar todos los artículos
GET /api/articles/{id}/ - Obtener detalles de un artículo específico
POST /api/articles/ - Crear un nuevo artículo
PUT /api/articles/{id}/ - Actualizar un artículo existente
DELETE /api/articles/{id}/ - Eliminar un artículo
