import random
import json
from datetime import datetime, timedelta

# Plant names and their mock scientific equivalents
plant_data = {
    "Monstera Deliciosa": "Monstera deliciosa",
    "Fiddle Leaf Fig": "Ficus lyrata",
    "Snake Plant": "Sansevieria trifasciata",
    "Peace Lily": "Spathiphyllum wallisii",
    "Spider Plant": "Chlorophytum comosum",
    "Pothos": "Epipremnum aureum",
    "ZZ Plant": "Zamioculcas zamiifolia",
    "Aloe Vera": "Aloe barbadensis miller",
    "Rubber Plant": "Ficus elastica",
    "Dracaena": "Dracaena marginata",
    "Calathea": "Calathea orbifolia",
    "Philodendron": "Philodendron hederaceum",
    "Bird of Paradise": "Strelitzia reginae",
    "Boston Fern": "Nephrolepis exaltata",
    "Croton": "Codiaeum variegatum",
    "Succulent Mix": "Various species",
    "Cactus": "Cactaceae family",
    "Bamboo Palm": "Chamaedorea seifrizii",
    "Areca Palm": "Dypsis lutescens",
    "Jade Plant": "Crassula ovata"
}

descriptions = [
    "A beautiful and easy-to-care-for houseplant.",
    "Thrives in bright, indirect light and adds a tropical feel.",
    "Low-maintenance and great for beginners.",
    "Purifies air and adds greenery to your space.",
    "Known for its striking foliage and unique pattern."
]

soil_types = [
    "Well-draining peat-based mix", "Cactus mix", "Loamy soil", "Sandy soil", "Moisture-retentive potting mix"
]

plant_types = [
    "Tropical indoor", "Desert succulent", "Foliage plant", "Flowering indoor", "Air-purifying"
]

locations = [
    "Upstairs", " Downstairs Bedroom", "Kitchen", "Music Room", "Office", "Upstairs Bedroom", "Bathroom", "Living Room"
]

def random_date_within_days(days_range):
    return (datetime.today() - timedelta(days=random.randint(0, days_range))).strftime('%Y-%m-%d')

# Generate 100 mock plants
plants = []
for i in range(100):
    name = random.choice(list(plant_data.keys()))
    scientific_name = plant_data[name]
    
    plant = {
        "name": name,
        "scientific_name": scientific_name,
        "description": random.choice(descriptions),
        "last_water_date": random_date_within_days(14),
        "watering_frequency_days": random.randint(3, 14),
        "soil_type": random.choice(soil_types),
        "plant_type": random.choice(plant_types),
        "location": random.choice(locations),
        "last_fertilization": random_date_within_days(60)
    }
    plants.append(plant)

# Save to TS file
with open("mock_plants.ts", "w") as file:
    file.write("export const mockPlants = ")
    json.dump(plants, file, indent=2)
    file.write(";\n")

print("Mock plant data with scientific names saved to 'mock_plants.ts'")
