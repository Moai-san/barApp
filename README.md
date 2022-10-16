# Instrucciones generales

-ng serve para probar en browser

-**no hacer ng build si quiere commitear cambios**, si requiere buildear si o si, debe hacerlo con "ng build --configuration=production" y luego hacer las modificaciones al dist como si fuera a generar la app para movil

## instrucciones si se quiere generar app para movil.

-eliminar cordova/www, crear symlink entre dist/ y cordova/www

-modificar archivos en dist/ 

    -a index.html cambiar lang en por es, y cambiar base href "/" por "./"
  
    -a index.html agregar "<script type="text/javascript" src="cordova.js"></script>" en el Head

    -al main.xxxxxxx.js reemplazarle las rutas "../../" por "./"

-cordova build android para generar apk
