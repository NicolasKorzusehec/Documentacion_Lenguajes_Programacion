# Entorno Virtual

https://github.com/carabedo/django

`Paginas a invetigar`: Django project


### crear entorno virtual desde cmd de VS code:

```
    py -m venv .venv (Crea el entorno)

    .venv\scripts\activate (Activa el entorno)

    python -m pip install --upgrade pip (Actualiza pip)

    python -m pip install django (Descarga la dependencia en el entorno)

    deactivate  (Desactiva el entorno)

```

### Crear entornos con virtualenv wrapper desde cmd del sistema

```
pip install virtualenvwrapper (Descarga la libreria en la computadora)

mkvirtualenv ``Nombre del entorno`` (crea el entorno en una carpeta llamada envs en el directorio desde el que se ejecute el comando)

workon ``Nombre del entorno creado`` (activa el entorno)

pip install ``dependencia``

pip list (Muestra todas las dependecias especificas del entorno)

pip freeze -> requirements.txt (Crea un txt que se puede llamar de cualquier forma pero es una convencion usar "requirements", este txt contiene la informacion de todas las dependencias del entorno virtual. Este  txt sera posteriormente leido por los contribuidores del proyecto para instalar las dependencias, al igual que por el runner del server)

deactivate (Desactiva el entorno)
```

### runners y entornos virtuales a partir de requirements.txt
Los runners ejecutan los requierements, recursos, comandos, actualizaciones.
```
pip install -r requirements 
```


### Levantar el server:

```
py manage.py runserver
```


### .gitignore

```.gitignore
# Environments (Agrupa todos los enviroments que podria estar creando un contribuidor)

.env

.venv

env/

venv/

ENV/

env.bak/

venv.bak/


# Archivos temporales

__pycache__/

# Data set (Hasta que se consolide)

db.sqlite3
```

