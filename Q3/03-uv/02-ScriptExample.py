# /// script
# requires-python = ">=3.13"
# dependencies = [
#     "flask",
# ]
# ///
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "hi world in flask"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
    
# run 1: uv run --with 'flask' 02-ScriptExample.py -> will have to write all dependencies whenever we run the script  
# run 2: uv add --script 02-ScriptExample.py 'flask' -> will add the dependencies on the top of the script and dont have to write names of dependencies everytime we run the script