const apiKey: string = "AIzaSyBJiygldMaOem_uP7LAVjZtWz9RZ1xCvdg";

interface Location {
  lat: number;
  lng: number;
}

export const getCoordinatesFromAddress = async (
  endereco: any
): Promise<Location> => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${endereco}&key=${apiKey}`
    );
    const data = await response.json();

    if (data.status === "OK") {
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      throw new Error("Erro ao geocodificar.");
    }
  } catch (error) {
    console.error("Erro ao fazer a solicitação:", error);
    throw error;
  }
};
