import streamlit as st
import json
import os

LIBRARY_FILE = 'library.txt'

# Load library from file
def load_library():
    if os.path.exists(LIBRARY_FILE):
        with open(LIBRARY_FILE, 'r') as file:
            return json.load(file)
    return []

# Save library to file
def save_library(library):
    with open(LIBRARY_FILE, 'w') as file:
        json.dump(library, file, indent=4)

# Display single book
def display_book(book, index):
    status = "Read" if book["read"] else "Unread"
    st.markdown(f"**{index}. {book['title']}** by *{book['author']}* ({book['year']}) - {book['genre']} - `{status}`")

# App start
# st.set_page_config(page_title="Personal Library Manager", layout="centered")
st.title("📚 Personal Library Manager")

# Session state
if 'library' not in st.session_state:
    st.session_state.library = load_library()

# Sidebar menu
menu = st.sidebar.selectbox("Menu", [
    "Add a Book",
    "Remove a Book",
    "Search for a Book",
    "Display All Books",
    "Display Statistics"
])

# Add a Book
if menu == "Add a Book":
    with st.form("add_book_form"):
        title = st.text_input("Book Title")
        author = st.text_input("Author")
        year = st.number_input("Publication Year", min_value=0, max_value=2100, step=1)
        genre = st.text_input("Genre")
        read = st.selectbox("Have you read this book?", ["No", "Yes"]) == "Yes"
        submitted = st.form_submit_button("Add Book")

        if submitted:
            st.session_state.library.append({
                "title": title,
                "author": author,
                "year": int(year),
                "genre": genre,
                "read": read
            })
            save_library(st.session_state.library)
            st.success("Book added successfully!")

# Remove a Book
elif menu == "Remove a Book":
    titles = [book['title'] for book in st.session_state.library]
    if titles:
        selected_title = st.selectbox("Select a book to remove", titles)
        if st.button("Remove Book"):
            st.session_state.library = [b for b in st.session_state.library if b['title'] != selected_title]
            save_library(st.session_state.library)
            st.success("Book removed successfully!")
    else:
        st.info("Your library is empty.")

# Search for a Book
elif menu == "Search for a Book":
    search_by = st.radio("Search by", ["Title", "Author"])
    query = st.text_input("Enter your search term")
    if st.button("Search"):
        results = [
            book for book in st.session_state.library
            if query.lower() in book[search_by.lower()].lower()
        ]
        if results:
            st.markdown("### 🔍 Matching Books:")
            for i, book in enumerate(results, 1):
                display_book(book, i)
        else:
            st.warning("No matching books found.")

# Display All Books
elif menu == "Display All Books":
    if st.session_state.library:
        st.markdown("### 📖 Your Library:")
        for i, book in enumerate(st.session_state.library, 1):
            display_book(book, i)
    else:
        st.info("Your library is empty.")

# Display Statistics
elif menu == "Display Statistics":
    total = len(st.session_state.library)
    if total == 0:
        st.info("No books in library.")
    else:
        read_count = sum(book["read"] for book in st.session_state.library)
        percentage = (read_count / total) * 100
        st.metric("Total Books", total)
        st.metric("Books Read", f"{read_count} ({percentage:.1f}%)")

# Footer
st.sidebar.markdown("---")
if st.sidebar.button("💾 Save & Exit"):
    save_library(st.session_state.library)
    st.sidebar.success("Library saved!")
