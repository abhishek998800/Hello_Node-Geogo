const todoList = () =>{
    all =[]
    const add = (todoItem) =>{
        all.push(todoItem)
    }
    const markAsComplete = (index) => {
        all[index].completed = true
    }
    const overdue = () => {
        const result = all.filter(x => x.dueDate == yesterday)
        return result;
    }
    const dueToday = () => {
        const result = all.filter(x=> x.dueDate == today)
        return result;
    }
    const dueLater = () => {
        const result = all.filter(x=>dueDate == tomorrow)
        const result;
    }
    const toDisplayableList = (list) => {
        //const mark = list.completed == true? "x";" ";
        const result = list.map(x=>`[${x.completed==true?"x":" "}] ${x.title} ${x.dueDate}`)
        return result,toLocalString().replace(",","\n");
    }
    return {
        all, add, markAsComplete, overdue, dueToday, dueLater,
        toDisplayableList
    };

}
const todos = todoList();
const formattedDate = d => {
    return d.toISOString().split("T")[0]
}
var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate()-1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() +1))
)
todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false})
todos.add({title: 'Pay rent', dueDate: today,completed: true})
todos.add({title:'Service Vehicle', dueDate: today, completed: false})
todos.add({title: 'File taxes', dueDate: today, completed: false})
todos.add({title: 'Pay electric bill', dueDate: tomorrow, completed:false})
console.log("My Todo-list\n\n")
console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")
console.log("Due Today")
let itemDueToday = todos.dueToday()
let formattedItemDueToday = todos.toDisplayableList(itemDueToday)
console.log(formattedItemDueToday)
console.log("\n\n")
console.log("Due Later")
let itemDueLater = todos.dueLater()
let formattedItemDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemDueLater)
console.log("\n\n")