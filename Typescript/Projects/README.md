To run every project, the "tsconfig.json" file should look like this:

{
  "compilerOptions": {
    "target": "es2020",  
    "module": "NodeNext",     
    "moduleResolution": "NodeNext",   
    "esModuleInterop": true,    
    "forceConsistentCasingInFileNames": true,  
    "strict": true, 
    "skipLibCheck": true  
  }
}

and "package.json" file should look like below (which shows which dependencies must be installed in each project)
{
  "name": "calculator-ts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Tooba",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.4.5"
  },
  "dependencies": {
    "@types/inquirer": "^9.0.7",
    "chalk": "^5.3.0",
    "inquirer": "^9.2.21"
  }
}

## steps to set up each project folder
start package.json: npm init -y

install typescript: npm install typescript --save-dev

generate tsconfig.json: npx tsc --init

install inquirer and chalk module: npm install inquirer chalk

install inquirer types: npm i --save-dev @types/inquirer

now create index.ts file and write code there

to run this: npx tsc-node index.ts