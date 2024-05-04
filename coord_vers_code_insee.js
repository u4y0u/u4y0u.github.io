async function getCityCode(latitude, longitude) {
    const apiUrl = `https://api-adresse.data.gouv.fr/reverse/?lon=${longitude}&lat=${latitude}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
            return data.features[0].properties.citycode;
        } else {
            console.error("Aucune commune trouvée pour les coordonnées fournies.");
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API:", error);
    }

    return null;
}