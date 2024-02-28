import List from "./Lists"


function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 45 },
    { id: 3, name: "orange", calories: 75 },
    { id: 4, name: "grape", calories: 159 },
    { id: 5, name: "kiwi", calories: 105 },
  ]
  const vegetables = [
    { id: 6, name: "carrot", calories: 41 },
    { id: 7, name: "broccoli", calories: 55 },
    { id: 8, name: "spinach", calories: 23 },
    { id: 9, name: "tomato", calories: 18 },
    { id: 10, name: "cucumber", calories: 16 }
]

 return(
<>
{fruits.length>0 && <List item={fruits} category = "fruits"/>} 
{vegetables.length>0 &&<List item={vegetables} category = "vegetables"/>}  
</>
 )
}

export default App
