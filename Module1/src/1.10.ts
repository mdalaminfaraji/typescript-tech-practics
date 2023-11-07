{
        // type TypeName = type | type | type;
      // literal type with union type :
type TUserName = "Mostafizur" | "Fahim" | "Roman";

const userName: TUserName = "Mostafizur";

//  for primitive type :

type TAge = string | number| undefined;
const age: TAge = "tweenty";
const age1: TAge = 20;
const age3: TAge = undefined;

// type objectType & null:
type User = {
   name: string;
   gender: "male" | "female";
   bloodGroup: "B+" | "A+" | "A-" | "B-" | "O+" | "O-" | "AB-" | "AB+";
};  
type TUser = {
        name: string,
        gender: "male" | "female",
        bloodGroup: "B+" | "B-" | "A+" | "A-" | "AB+" | "AB-" | "O-" | "O+",
     };
     let user: TUser | null = null;
     user = {
        name: "Mostafiuzr",
        gender: "male",
        bloodGroup: "B+",
     };
     
     let user1: TUser | null = null;
     user1 = {
        name: "mukta",
        gender: "female",
        bloodGroup: "B+",
     };
     
     console.log(user, user1);

     type TypeOne = {
        name: string;
        age: number;
     };
     type TypeTwo = {
        profession: string;
     };
     type typeThree = TypeOne & TypeTwo;
     
     // here typeThree contains name, age , profession property

     type TBird = {
        eyes: number;
        wings: number;
        fly: TFly;
     };
     
     type TEat = () => void;
     type TFly = () => void;
     type TMen = {
        legs: number;
        eat: TEat;
     };
     
     // intersection type is here: The TOwl contains all features of TBird & TMen
     type TOwl = TBird & TMen;
     
     const owl: TOwl = {
        eyes: 2,
        wings: 2,
        legs: 2,
        fly: () => {
           console.log("flying ......");
        },
        eat: () => {
           console.log("eating ..............");
        },
     };
     
     console.log(owl);
     owl.fly();
     owl.eat();
}