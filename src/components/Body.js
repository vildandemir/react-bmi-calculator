import { useEffect, useState, useContext } from "react";
import DietContext from "../context/DietContext";

function Body() {
  const { form } = useContext(DietContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const mapImg = {
    width: "250px",
    height: "250px",
  };

  useEffect(() => {
    fetch(
      "https://yummly2.p.rapidapi.com/feeds/list?limit=18&start=0&tag=list.recipe.popular",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": `${process.env.REACT_APP_RAPID_API_HOST}`,
          "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.feed);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  let bmiForDiet = (
    (Number(form.weight) / Number(form.height * form.height)) *
    10000
  ).toFixed(1);

  console.log(items);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul>
          {bmiForDiet &&
            bmiForDiet <= 18.5 &&
            items
              .filter((item) => item.display.displayName.includes("Chicken"))
              .map((filteredItem) => (
                <li id="mapList" key={filteredItem.content.details.id}>
                  {filteredItem.display.displayName}
                  <p>
                    kcal :
                    {
                      filteredItem.content.nutrition.nutritionEstimates[0]
                        .display.value
                    }
                  </p>
                  <img style={mapImg} src={filteredItem.display.images[0]} />
                </li>
              ))}
          {bmiForDiet > 18.5 &&
            bmiForDiet <= 24.9 &&
            items
              .filter((item) => item.display.displayName.includes("Easy"))
              .map((filteredItem) => (
                <li id="mapList" key={filteredItem.content.details.id}>
                  {filteredItem.display.displayName}
                  <p>
                    kcal :
                    {
                      filteredItem.content.nutrition.nutritionEstimates[0]
                        .display.value
                    }
                  </p>
                  <img style={mapImg} src={filteredItem.display.images[0]} />
                </li>
              ))}
          {bmiForDiet >= 25 &&
            bmiForDiet <= 29.9 &&
            items
              .filter((item) => item.display.displayName.includes("Broccoli"))
              .map((filteredItem) => (
                <li id="mapList" key={filteredItem.content.details.id}>
                  {filteredItem.display.displayName}
                  <p>
                    kcal :
                    {
                      filteredItem.content.nutrition.nutritionEstimates[0]
                        .display.value
                    }
                  </p>
                  <img style={mapImg} src={filteredItem.display.images[0]} />
                </li>
              ))}
          {bmiForDiet >= 30 &&
            items
              .filter((item) => item.display.displayName.includes("Healthy"))
              .map((filteredItem) => (
                <li id="mapList" key={filteredItem.content.details.id}>
                  {filteredItem.display.displayName}
                  <p>
                    kcal :
                    {
                      filteredItem.content.nutrition.nutritionEstimates[0]
                        .display.value
                    }
                  </p>
                  <img style={mapImg} src={filteredItem.display.images[0]} />
                </li>
              ))}
        </ul>
      </div>
    );
  }
}

export default Body;
