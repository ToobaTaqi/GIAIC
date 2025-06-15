PLANET_GRAVITY = {
    "Mercury": 0.376,
    "Venus": 0.889,
    "Mars": 0.378,
    "Jupiter": 2.36,
    "Saturn": 1.081,
    "Uranus": 0.815,
    "Neptune": 1.14,
}

def main():
    earth_weight = float(input("Enter a weight on Earth: "))
    planet = input("Enter a planet: ")

    gravity_constant = PLANET_GRAVITY.get(planet)

    if gravity_constant is None:
        print("Unknown planet.")
        return

    planetary_weight = round(earth_weight * gravity_constant, 2)
    print("The equivalent weight on " + planet + ": " + str(planetary_weight))

if __name__ == "__main__":
    main()
