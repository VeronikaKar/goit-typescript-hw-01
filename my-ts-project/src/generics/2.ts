// You have an AllType type. There is a compare function that accepts two objects. These objects contain AllType fields. Your task is to use Pick and generics to indicate that these parameter fields belong to AllType. The compare function should return AllType.
// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare(top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare( top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};
