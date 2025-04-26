import streamlit as st
import hashlib
from cryptography.fernet import Fernet

# Generate a key (store securely in production)
KEY = Fernet.generate_key()
cipher = Fernet(KEY)

# In-memory storage
stored_data = {}  # {encrypted_text: {encrypted_text, hashed_passkey}}
failed_attempts = 0

# Utility functions
def hash_passkey(passkey):
    return hashlib.sha256(passkey.encode()).hexdigest()

def encrypt_data(text):
    return cipher.encrypt(text.encode()).decode()

def decrypt_data(encrypted_text):
    return cipher.decrypt(encrypted_text.encode()).decode()

def check_passkey(encrypted_text, passkey):
    hashed = hash_passkey(passkey)
    return encrypted_text in stored_data and stored_data[encrypted_text]['passkey'] == hashed

# Streamlit UI
st.title("🔒 Secure Data Encryption System")
menu = ["Home", "Store Data", "Retrieve Data", "Login"]
choice = st.sidebar.selectbox("Navigation", menu)

if choice == "Home":
    st.subheader("🏠 Welcome to the Secure Data System")
    st.write("Securely store and retrieve data using unique passkeys.")

elif choice == "Store Data":
    st.subheader("📂 Store Data Securely")
    user_data = st.text_area("Enter Data:")
    passkey = st.text_input("Enter Passkey:", type="password")

    if st.button("Encrypt & Save"):
        if user_data and passkey:
            encrypted_text = encrypt_data(user_data)
            stored_data[encrypted_text] = {
                "encrypted_text": encrypted_text,
                "passkey": hash_passkey(passkey)
            }
            st.success("✅ Data stored securely!")
        else:
            st.error("⚠️ Both fields are required!")

elif choice == "Retrieve Data":
    failed_attempts
    st.subheader("🔍 Retrieve Your Data")
    encrypted_text = st.text_area("Enter Encrypted Data:")
    passkey = st.text_input("Enter Passkey:", type="password")

    if st.button("Decrypt"):
        if encrypted_text and passkey:
            if check_passkey(encrypted_text, passkey):
                failed_attempts = 0
                decrypted_text = decrypt_data(encrypted_text)
                st.success(f"✅ Decrypted Data: {decrypted_text}")
            else:
                failed_attempts += 1
                st.error(f"❌ Incorrect passkey! Attempts remaining: {3 - failed_attempts}")
                if failed_attempts >= 3:
                    st.warning("🔒 Too many failed attempts! Redirecting to Login Page.")
                    st.experimental_rerun()
        else:
            st.error("⚠️ Both fields are required!")

elif choice == "Login":
    failed_attempts
    st.subheader("🔑 Reauthorization Required")
    login_pass = st.text_input("Enter Master Password:", type="password")

    if st.button("Login"):
        if login_pass == "admin123":
            failed_attempts = 0
            st.success("✅ Reauthorized successfully! Redirecting to Retrieve Data...")
            st.experimental_rerun()
        else:
            st.error("❌ Incorrect password!")
