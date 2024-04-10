

export async function getAdvice(){
 try {
  const res = await fetch("https://api.adviceslip.com/advice");
const data  = await res.json()
console.log(data)
 return data;
 } catch (error) {
       throw new Error("Advice cannot found");
 }
 // return data
}

