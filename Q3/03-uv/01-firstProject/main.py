from fastapi import FastAPI
import uvicorn


app = FastAPI()

@app.get('/')
async def root():
    return {"message":"Hii World"}

def main():
    print("Hello from 01-firstproject!")
    uvicorn.run(app, host="0.0.0.0", port=8000)

if __name__ == "__main__":
    main()

# by gpt
# from fastapi import FastAPI
# import uvicorn

# app = FastAPI()

# @app.get('/')
# async def root():
#     return {"message": "Hi World"}

# def main():
#     print("Hello from 01-firstproject!")
#     uvicorn.run(app, host="0.0.0.0", port=8000)

# if __name__ == "__main__":
#     main()
