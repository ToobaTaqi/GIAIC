import re
import streamlit as st

# Logic
def check_password_strength(password):
    score = 0
    
    # Length Check
    if len(password) >= 8:
        score += 1
    else:
        st.write("❌ Password should be at least 8 characters long.")
    
    # Upper & Lowercase Check
    if re.search(r"[A-Z]", password) and re.search(r"[a-z]", password):
        score += 1
    else:
        st.write("❌ Include both uppercase and lowercase letters.")
    
    # Digit Check
    if re.search(r"\d", password):
        score += 1
    else:
        st.write("❌ Add at least one number (0-9).")
    
    # Special Character Check
    if re.search(r"[!@#$%^&*]", password):
        score += 1
    else:
        st.write("❌ Include at least one special character (!@#$%^&*).")
    
    # Strength Rating
    if score == 4:
        st.write(":green[✅ Strong Password!]")
    elif score == 3:
        st.write(":blue[⚠️ Good but missing some security features.]")
        # st.write(":yello[⚠️ Moderate Password - Consider adding more security features.]")
    else:
        st.write(":red[❌ Weak Password - Improve it using the suggestions above.]")

# Ui
password = st.text_input("Enter your password")
if st.button("Check"):
    check_password_strength(password)
    