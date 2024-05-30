"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.blue.bold("This is a simple calculator:"));
function calculator() {
    return __awaiter(this, void 0, void 0, function* () {
        let n = yield inquirer_1.default.prompt([
            {
                type: "number",
                name: "FirstNum",
                message: "Enter First Number",
                validate: (ans) => {
                    if (!ans) {
                        return (n.FirstNum = 0);
                    }
                    return true;
                },
            },
            {
                type: "list",
                name: "operator",
                message: "Select the operation you wanna perform",
                choices: ["+", "-", "x", "/"],
                default: "+",
            },
            {
                type: "number",
                name: "SecondNum",
                message: "Enter Second Number",
                validate: (ans) => {
                    if (!ans) {
                        return (n.SecondNum = 0);
                    }
                    return true;
                },
            },
        ]);
        let FN = n.FirstNum;
        let SN = n.SecondNum;
        let result;
        const calculation = () => {
            if (n.operator === "+") {
                result = FN + SN;
            }
            else if (n.operator === "-") {
                result = FN - SN;
            }
            else if (n.operator === "x") {
                result = FN * SN;
            }
            else if (n.operator === "/") {
                result = FN / SN;
            }
            else {
                return "Error";
            }
            return result;
        };
        console.log(chalk_1.default.yellowBright(`Results : ${FN} ${n.operator} ${SN} = ${calculation()}`));
        let options = yield inquirer_1.default.prompt({
            type: "list",
            name: "option",
            message: "You want another calculation?",
            choices: ["yes", "no"],
            default: "no",
        });
        if (options.option === "yes") {
            yield calculator();
        }
        if (options.option === "no") {
            console.log(chalk_1.default.bgRed("calculations Ended!!"));
        }
    });
}
calculator();
