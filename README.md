# Aquí Fue en el celular

Aquí están el **costeo** y el **análisis** de Aquí Fue como aplicaciones que se instalan en el celular.
Los datos siguen viviendo en tus hojas de Google; esta carpeta solo es la "pantalla".

## Qué hay aquí
- `index.html`: la página de inicio, con dos botones (Costeo y Análisis).
- `costeo/` y `analisis/`: cada aplicación (la pantalla, el manifiesto para instalarla y el guardado para abrirla sin internet).
- `conectar.html`: la pantalla donde pegas, una sola vez en cada celular, el enlace de tu Apps Script.
- `icons/`: los íconos de cada aplicación.

## Subirlo a GitHub (desde el computador)
1. Entra a **github.com** e inicia sesión (o crea tu cuenta, es gratis).
2. Arriba a la derecha toca **+ → New repository**. Nombre: `aqui-fue`. Márcalo como **Public** y presiona **Create repository**.
3. En la página que se abre, toca el enlace **uploading an existing file**.
4. Abre esta carpeta en tu computador, selecciona **todo lo que hay adentro** (index.html, conectar.html, costeo, analisis, icons…) y **arrástralo** al recuadro de GitHub. Espera a que termine de subir.
5. Abajo presiona **Commit changes**.
6. Ve a **Settings → Pages**. En **Source** elige **Deploy from a branch**; en **Branch** elige `main` y la carpeta `/ (root)`; presiona **Save**.
7. Espera uno o dos minutos y recarga. Arriba aparece: *Your site is live at https://TU-USUARIO.github.io/aqui-fue/*

## Conectarlo en el celular
1. Abre ese enlace en el celular (con Chrome en Android o Safari en iPhone).
2. Toca **Abrir el costeo**. La primera vez te pide el enlace de Apps Script:
   en el proyecto del **costeo**, ve a **Implementar → Administrar las implementaciones** y copia la **URL de la aplicación web** (termina en `/exec`).
   Pégala, toca **Probar la conexión** y luego **Guardar y abrir**.
3. Entra con tu clave de siempre.
4. Para instalarla: en Chrome, menú de tres puntos → **Instalar aplicación** (o **Añadir a la pantalla de inicio**).
   En iPhone: botón Compartir → **Añadir a pantalla de inicio**.
5. Haz lo mismo con el **Análisis**, usando el enlace del proyecto de análisis.

## Cosas importantes
- En Apps Script, en **Administrar las implementaciones → Quién tiene acceso**, debe decir **Cualquier persona**. Tu clave sigue protegiendo los datos.
- El enlace de Apps Script **no está en estos archivos**: se guarda solo dentro de tu celular. Por eso el repositorio puede ser público sin mostrar tu servidor.
- Cuando en Apps Script publiques una **Nueva versión** (Administrar las implementaciones → lápiz → Nueva versión), el enlace **no cambia**. Si algún día creas una **Nueva implementación**, el enlace sí cambia: cámbialo en `conectar.html?app=costeo` (o `app=analisis`).
- Sin internet la aplicación abre, pero no muestra datos: los datos se leen de tus hojas.
- Para actualizar la pantalla: en GitHub abre el archivo (por ejemplo `costeo/index.html`), toca el lápiz, pega el contenido nuevo y presiona **Commit changes**. En el celular, cierra la aplicación y ábrela dos veces.
- Las páginas de Apps Script de siempre siguen funcionando igual.

## Si algo falla
- **"No pude conectar"**: revisa que el enlace termine en `/exec`, que sea el de la implementación más reciente y que el acceso sea **Cualquier persona**.
- **La página de GitHub sale en blanco o con "404"**: espera un par de minutos y confirma que los archivos están en la raíz del repositorio (no dentro de otra carpeta).
- **No aparece "Instalar aplicación"**: abre la dirección con **https** y recarga la página una vez; en iPhone usa Safari.
