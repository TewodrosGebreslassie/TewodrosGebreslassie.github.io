export function calcTemprature(temperature: number, unit: string) {
    if (unit.toLowerCase() === "celsius") {
      return (
        "temprature is : " + ((9 / 5) * temperature + 32) + " degree fahrenheit"
      );
    } else if (unit.toLowerCase() === "fahrenheit") {
      return (
        "temprature is : " + (5 / 9) * (temperature - 32) + " degree celsius"
      );
    } else {
      return "provide valid input";
    }
  }
  console.log(calcTemprature(0, "celsius"));