# FrontendME (MundoEs)

Proyecto Vue 3 + Vite creado como base para la interfaz de MundoEs. A continuación se documenta, de forma cronológica y práctica, todo lo que hiciste desde que montaste el proyecto: decisiones técnicas, archivos añadidos/actualizados, y cómo ejecutar y depurar localmente.

## Resumen técnico
- Framework: Vue 3 (script setup)
- Bundler/dev server: Vite
- Estilado: Tailwind CSS (utilidades)
- Rutas: Vue Router
- Iconos: Font Awesome (integrado en `main.js`)
- Gestor de paquetes: pnpm (lockfile: `pnpm-lock.yaml`)

## Historia de cambios (cronológica — acciones realizadas por ti)
1. Inicialización del proyecto con Vite + Vue 3 (plantilla base).  
2. Creación de la estructura principal en `src/` con componentes y layout:
	- `src/layout/Layouts.vue` — layout principal con Header y Footer (slot / RouterView como patrón discutido).
	- `src/App.vue`, `src/main.js`, `vite.config.js` — configuración y bootstrap del app; registro global de Font Awesome.
3. Implementación del Header y navegaciones:
	- `src/components/Header.vue`, `src/components/navbar/*` — logo, lista de navegación y botones. Se agregó lógica responsive (hamburger) y uso de `font-awesome-icon`.
4. Integración de Font Awesome:
	- Instalaste e importaste los paquetes `@fortawesome/*` y registraste `FontAwesomeIcon` en `main.js`.
5. Hero y formularios:
	- Componentes `src/components/hero/*` implementados: `Heroimg.vue`, `HeroContent.vue`, `HeroForm.vue` con diseño responsive.
6. Tarjetas y acciones:
	- Componentes `src/components/CardsComponents.vue` y `src/components/main/CardsAction.vue` (tarjetas con igual altura, responsive con flexbox).
7. Footer dinámico y responsive:
	- `src/components/Footer.vue` convertido para usar datos dinámicos dentro del propio `<script setup>`.
	- Enlaces internos usan `<router-link>` (a través de `RouterLink`) y los externos usan `<a href>`.
	- Botón flotante de WhatsApp con `href` dinámico.
	- Ajustes responsivos: 3 columnas en lg, 2 en sm/md y 1 en móvil.
8. Limpieza y commits:
	- Añadiste nuevos componentes (`ActionCardsComponents.vue`, `CardsComponents.vue`, `src/components/main/CardsAction.vue`) y realizaste commits.
	- Empujaste los cambios a GitHub (`origin/main`).

## Archivos añadidos / modificados (clave)
- `src/components/Footer.vue` — ahora contiene datos reactivos (`footer`) y renderiza secciones dinámicamente. Usa `attrsFor(link)` para normalizar `to` vs `href`.
- `src/components/Header.vue` — navegación responsive y logo.
- `src/components/hero/*` — hero image, content y form.
- `src/components/CardsComponents.vue` & `src/components/main/CardsAction.vue` — tarjetas responsive con igual altura.
- `src/main.js` — bootstrap del app y registro de Font Awesome.
- `vite.config.js` — alias `@` configurado hacia `./src`.

## Cómo ejecutar localmente
Requisitos: Node.js (recomendado v18+), pnpm instalado globalmente.

1. Instalar dependencias (desde el root `FrontendME`):

```bash
pnpm install
```

2. Levantar el servidor de desarrollo:

```bash
pnpm run dev
```

3. Abrir el navegador en la URL que indique Vite (normalmente `http://localhost:5173`).

4. Si haces cambios en componentes usa el Hot Reload de Vite; para revisar el historial de commits y confirmar los cambios en GitHub:

```bash
git log --oneline --decorate --graph -n 10
```

## Notas técnicas y recomendaciones
- Router vs Layout: decidiste mantener los enlaces internos con `RouterLink`. Si prefieres que el `Layouts.vue` contenga `RouterView` directamente (para manejar distintos layouts) podemos refactorizar.
- Datos dinámicos: el footer usa datos dentro del `<script setup>`; si deseas que esa información venga de un archivo compartido (`src/data/footerData.js`) o desde un CMS/API, lo podemos mover fácilmente.
- Abrir rutas internas en nueva pestaña: `router-link` no soporta `target="_blank"` de forma nativa — si necesitas esa funcionalidad se puede generar la URL con `router.resolve()` y usar `<a href="...">`.
- Tests y CI: sugerencia futura: añadir pruebas UI con Vitest + Testing Library y un workflow de GitHub Actions que construya y haga lint al push.

## Cambios pendientes sugeridos (opcional)
- Añadir un archivo `src/data/footerData.js` y consumirlo desde `Footer.vue` para reutilizar datos.  
- Añadir validaciones y control de formulario en `HeroForm.vue` (v-model, validaciones).  
- Añadir minified README con comandos rápidos y un `Makefile` o tasks de VS Code.

---

Si quieres, puedo hacer ahora:
- mover los datos del footer a `src/data/footerData.js` y actualizar `Footer.vue` para importarlos;  
- o crear un PR separado con commits limpios (por ejemplo: separar footer changes + hero changes en commits distintos).

 Dime qué prefieres y lo implemento.

## Cambios realizados hoy (resumen)

Hoy realizaste varios cambios y mejoras en el frontend; los incluyo aquí para dejar un registro claro y reproducible:

- Navegación dinámica:
	- `src/components/navbar/ListNav.vue` — convertido para generar los items desde un array `navItems` en `<script setup>` y renderizar con `v-for` (reduce duplicación HTML).
	- `src/components/navbar/FooterNav.vue` — convertido igualmente a `navItems` + `v-for` para generar los enlaces del footer fijo.

- Footer y layout:
	- `src/components/Footer.vue` — ajustes para centrar el grupo de columnas como un bloque en pantallas grandes (se añadió `justify-center` en el contenedor), y cada columna tiene anchura fija en `lg` (`lg:w-56`) para que el conjunto quede centrado; los títulos dentro de cada columna permanecen left-aligned.
	- El footer mantiene sus datos dinámicos dentro de su `<script setup>` (como solicitaste), y los enlaces internos usan `RouterLink` mientras que los externos usan `<a href>`.

- Emergency cards (nuevo componente):
	- `src/components/main/Emergency.vue` — nuevo componente con 4 tarjetas de emergencia (Carabineros, Bomberos, SAMU, PDI). Implementadas con Tailwind y flexbox, cada tarjeta muestra icono (FontAwesome), número y botón `tel:`.
	- La tarjeta de Bomberos se resaltó con borde amarillo (prop `highlight`) para simular el diseño de la imagen que compartiste.

- Font Awesome / main:
	- `src/main.js` — se importaron y registraron iconos adicionales necesarios para `Emergency.vue`: `faFire`, `faAmbulance`, `faPhone` (añadidos a la librería global para uso en componentes).

- Limpieza y verificación
	- Ejecutaste comprobaciones de errores en los archivos modificados (`Footer.vue`, `ListNav.vue`, `FooterNav.vue`, `Emergency.vue`, `main.js`) y no se encontraron errores de compilación en los archivos editados.

Si quieres que lo haga por ti, puedo además:

- Mover los arrays `navItems` a `src/data/nav.js` y reusar la misma fuente para `ListNav` y `FooterNav`.
- Mover los datos del `Footer` a `src/data/footerData.js` si prefieres centralizar.
- Hacer commit con un mensaje claro y hacer push al repositorio remoto.

Dime si quieres que haga el commit/push ahora y qué mensaje prefieres para el commit.

## Cambios recientes (incluye edits locales no guardados en GitHub)

A continuación hay un resumen práctico de los cambios que hiciste hoy y de los cambios recientes que podrían no estar todavía en el remoto (útil antes de hacer push):

- Componentes nuevos / actualizados en `src/components/main`:
	- `Emergency.vue` — nueva sección con 4 tarjetas de emergencia (Carabineros, Bomberos, SAMU, PDI) usando Tailwind + FontAwesome y botones `tel:`.
	- `Protocolo.vue` — nuevo componente con pasos dinámicos del protocolo de emergencia (números, instrucciones) usando flexbox.
	- `ContactEmergency.vue` — tarjeta con CTA a WhatsApp (dinámica, genera `https://wa.me/...`).
	- `AllCards.vue` — nuevo conjunto de tarjetas dinámicas (Hospedajes, Agencias, Servicios, Favoritos, Perfil, Emergencia) con `router-link` para navegación interna.

- Navegación y navbar:
	- `src/components/navbar/ListNav.vue` — convertido a datos dinámicos (`navItems` + `v-for`).
	- `src/components/navbar/FooterNav.vue` — convertido a datos dinámicos (`navItems` + `v-for`).

- Footer / Layout:
	- `src/components/Footer.vue` — ajustes para centrar el bloque de columnas y mantener títulos left-aligned; datos dinámicos dentro del componente.

- Botón reutilizable:
	- `src/components/ButtonComponents.vue` — convertido para usarse como componente-hijo sin props (usa slot) y acepta clases Tailwind desde el padre; mantiene re-emisión de `click`.
	- Integración: `Emergency.vue` usa `ButtonComponents` dentro del `<a href="tel:...">` para mantener el CTA y aplicar el estilo del botón.

- Font Awesome / main:
	- `src/main.js` — añadiste iconos adicionales a la librería (ej. `faFire`, `faAmbulance`, `faPhone`, `faArrowRight`). Revisa la coma faltante si aparece un error de parseo.

