
const pt = require("prompt-sync")({ sigint: true})

const nombre = pt("¿Cuál es tu nombre?");
console.log("\nTu nombre es " + nombre)

const edad = pt("¿Cuál es tu edad?");
console.log("\nTu edad es " + edad)

if (edad < 18) {
    console.log("No puedes conducir")
} else {
    console.log("si puedes conducir")
}

