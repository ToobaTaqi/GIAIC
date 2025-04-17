# pip install streamlit

import pandas as pd
import os
from io import BytesIO
import streamlit as st

st.set_page_config("Data sweeper Layout",layout="wide")

st.title("Hello-This is Title") # Shows a big title.
st.write("This is my first Streamlit app <3") # Displays text, numbers, DataFrames, Markdown, etc.
st.write("Hello, world!")
st.write(123)


# 
if st.button("Click me"):
    st.write("You clicked me")

age = st.slider("Select your age", 0, 1000)
st.write("Your age is", age)
if age>0:
    st.write("congratulations, You're alive")
    if age>50 and age<500:
        st.write("you're old")
    elif age>500 and age<=1000:
        st.write("you're Ghost")
    else :
        st.write("you're young")

# input
name = st.text_input("Enter your name")
st.write("Hello,", name)



# image
from PIL import Image

img = Image.open("visionboard2.png")
st.image(img, caption="Vision Board - Example Image", use_container_width=True)

# file uploader
file = st.file_uploader("Upload your file",type=["csv","xlsx"],accept_multiple_files=True)
if file is not None:
    st.write("File uploaded!")
    
if file:
    for f in file:
        file_ext=os.path.splitext(file.name)[-1].lower()
        st.write(file_ext)
        if file_ext==".csv":
            df=pd.read_csv(file)
        elif file_ext==".xlsx":
            df=pd.read_excel(file)
        else:
            st.write("File type not supported")
            continue
        
st.write(f"File name : {file.name}")
st.write(f"File size : {file.size}")

# -----------------
files = st.file_uploader("Upload your file",type=["csv","xlsx"],accept_multiple_files=True)
if files is not None:
    st.write("File uploaded!")
    
if files:
    for file in files:
        file_ext = os.path.splitext(file.name)[-1].lower()
        st.write(f"File extension: {file_ext}")

        if file_ext == ".csv":
            df = pd.read_csv(file)
        elif file_ext == ".xlsx":
            df = pd.read_excel(file)
        else:
            st.warning(f"{file.name} is not a supported file type.")
            continue

        # Display info
        st.success(f"Successfully uploaded: {file.name}")
        st.write(f"File name: {file.name}")
        st.write(f"File size: {file.size} bytes")

        # Optional: Show data preview
        st.dataframe(df.head())