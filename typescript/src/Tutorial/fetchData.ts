// const url = "https://www.course-api.com/react-tours-project";

// async function fetchData(url: string) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const date = await response.json();
//     console.log(date);
//     return date;
//   } catch (error) {
//     const errorMsg =
//       error instanceof Error ? error.message : "there was an error...";
//     console.log(errorMsg);
//     return [];
//   }
// }

// const tour = await fetchData(url)
// console.log(tour);



// const tours = await fetchData(url);
// tours.map((tour: any) => {
//   console.log(tour.name);
// });

// return empty array
// throw error in catch block
// we are not setting state values in this function


const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  something: boolean;
};

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const date = await response.json();
    console.log(date);
    return date;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : "there was an error...";
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
console.log(tours);
tours.map((tour) => {
  console.log(tour.name);
});
