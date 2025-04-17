import streamlit as st
import pandas as pd

# logic
def convert(value, from_unit, to_unit, category):
    conversions = {
        "Length": {
            "meters": 1.0,
            "kilometers": 0.001,
            "miles": 0.000621371,
            "feet": 3.28084,
            "inches": 39.3701
        },
        "Weight": {
            "kilograms": 1.0,
            "grams": 1000.0,
            "pounds": 2.20462,
            "ounces": 35.274
        },
        "Temperature": {
            # Temp handled separately
        }
    }

    if category == "Temperature":
        if from_unit == "Celsius":
            if to_unit == "Fahrenheit":
                return (value * 9/5) + 32
            elif to_unit == "Kelvin":
                return value + 273.15
            else:
                return value
        elif from_unit == "Fahrenheit":
            if to_unit == "Celsius":
                return (value - 32) * 5/9
            elif to_unit == "Kelvin":
                return ((value - 32) * 5/9) + 273.15
            else:
                return value
        elif from_unit == "Kelvin":
            if to_unit == "Celsius":
                return value - 273.15
            elif to_unit == "Fahrenheit":
                return ((value - 273.15) * 9/5) + 32
            else:
                return value

    else:
        base_value = value / conversions[category][from_unit]
        return base_value * conversions[category][to_unit]
    
# UI
st.title("Mine")
category = st.selectbox("Select Category",["Length","Weight"])

units={
    "Length": ["meters","kilometers","miles","feet","inches"],
    "Weight": ["kilograms","grams","pounds","ounces"]
}

from_unit = st.selectbox("From",units[category])
to_unit = st.selectbox("To",units[category])
value = st.number_input(f"Enter value {from_unit}",step=0.01)

if st.button("Convert"):
    result = convert(value, from_unit, to_unit, category)
    st.success(f"{value:.2f} {from_unit} = {result:.4f} {to_unit}")