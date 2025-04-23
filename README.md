# iNeedWaterMaster

Official Plant watering app being built. This is a long term project based of the POC in iNeedWater

## Toolbar

- Make thinner
- Git rid of button shadow on cat icon.

## Generating plants & Plant Dict

To write new plant JSON for 100 sample plants:

```bash
cd src
cd Plants
python generate_plants.py
```

Will overwrite mock_plants.json

Set-up for dict:

```
plant = {
        "name": string
        "scientific_name": string
        "description": string
        "last_water_date": datetime (yyy-mm-dd)
        "watering_frequency_days": int
        "soil_type": string
        "plant_type": string
        "location": string
        "last_fertilization": DateTime
    }
```


## TODO

**April**:

- Homepage
  - Plant Card
    - Upload Picture
    - Name
    - Last watering date
    - Click Action -> **Todo: will pop up modal**
  - Add Card Button
    - Click Action -> **Todo: will pop up modal**

**May**:

- Research Databases and put it in there
- Keep working on Homepage
  - Build Main Modal for popups
  - Build add card insert when add button clicked

_**Add more as design grows**_
