import { Provincia, LugarTuristico, SurfaceResponse, CapitalResponse } from "../interfaces/interfaces";
import { pathFile } from "../database/index";
import jsonfile from "jsonfile";

const getAllInfo = (): Provincia[] => jsonfile.readFileSync(pathFile);

const leerDb = getAllInfo();
// console.log(leerDb);

// Crear un método getCitiesBySurface(surface) -> el mismo recibirá la supercie como parametro y deberá devolver
// un array con todas las ciudades que posean mayor o igual superficie que la pasada por parametro. 
//Los elementos del array deben tener solo tres propiedades: "nombre", "superficie_km2" y "habitantes".
// [ { "nombre": "Buenos aires", "superficie_km2": 19283189, "habitantes": 12387192 }, { "nombre": "Santa Fe", "superficie_km2": 81289, "habitantes": 91919 } ]



//const city = [
//     { "nombre": "Buenos Aires", "superficie_km2": 307571, "habitantes": 15402439 },
//     { "nombre": "Santa Fe", "superficie_km2": 133007, "habitantes": 3397532 },
//     { "nombre": "Cordoba", "superficie_km2": 165321, "habitantes": 3567654 },
//     { "nombre": "Mendoza", "superficie_km2": 148827, "habitantes": 1738929 },
//     { "nombre": "Salta", "superficie_km2": 155488, "habitantes": 1214441 },
//   ];
  
//   const getCitiesBySurface = (surface: any) => city
//     .filter(ciudad => ciudad.superficie_km2 >= surface)
//     .map(ciudad => ({
//       nombre: ciudad.nombre,
//       superficie_km2: ciudad.superficie_km2,
//       habitantes: ciudad.habitantes
//     }));
  
//   const resultadoFiltrado = getCitiesBySurface(165321);
//   console.log(resultadoFiltrado);
  
const city = [
    { "nombre": "Buenos Aires", "superficie_km2": 307571, "habitantes": 15402439 },
    { "nombre": "Santa Fe", "superficie_km2": 133007, "habitantes": 3397532 },
    { "nombre": "Cordoba", "superficie_km2": 165321, "habitantes": 3567654 },
    { "nombre": "Mendoza", "superficie_km2": 148827, "habitantes": 1738929 },
    { "nombre": "Salta", "superficie_km2": 155488, "habitantes": 1214441 },
  ];
  
  const getCitiesBySurface = (surface: number) => city
    .filter(ciudad => ciudad.superficie_km2 >= surface)
    .map(ciudad => ({
      nombre: ciudad.nombre,
      superficie_km2: ciudad.superficie_km2,
      habitantes: ciudad.habitantes
    }));
  
  const resultadoFiltrado = getCitiesBySurface(165321);
  console.log(resultadoFiltrado);
  



//   Crear un método que se llame getToursByCapital(capital) -> Esta función debe retornar el array con todos los puntos turisticos.
// [ { "nombre": "Parque Nacional El Palmar", "tipo": "Parque Nacional", "atracciones": ["Palmares", "Senderismo"] }, { "nombre": "Rosario", "tipo": "Ciudad", "atracciones": ["Monumento a la Bandera", "Parque Independencia"] } ]

  
const getToursByCapital = (capital: string):CapitalResponse =>  
    Capi.filter(capital => capital.lugares_turisticos = capital)
    .map(ciudad => ({
      nombre: ciudad.nombre,
      superficie_km2: ciudad.superficie_km2,
      habitantes: ciudad.habitantes
    }));
  
  const resultadoFiltrado1 = getCitiesBySurface(165321);
  console.log(resultadoFiltrado);
  