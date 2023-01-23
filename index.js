let myLeads = []

//myLeads = JSON.parse(myLeads)  //from string to array
 
//myLeads = JSON.stringify(myLeads) //from array to string

const inputEl = document.getElementById("input-el")  //developers use both const and let to declare variables

const ulEl = document.getElementById("ul-el")

//localStorage.setItem("myLeads", "www.examplelead.com")
                 //key(string)      //value(string)
//console.log(localStorage.getItem("myLeads")) //fetches the item from local storage
//localStorage.clear() //clears out the entire local storage

const inputBtn = document.getElementById("input-btn") //difference between const and let - const can't be reassigned
const tabBtn = document.getElementById("tab-btn")
const dltbtn = document.getElementById("dlt-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)  //using parametrs 
}


tabBtn.addEventListener("click", function(){
    //Grab the URL of the current tab
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        
    // })
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

    
})

function render(leads){
    let listItems = ""
    
    for(let i = 0; i < leads.length; i++){
        
       
         listItems += `
         <li> 
            <a href = "${leads[i]}"  target = "_blank"> 
                ${leads[i]}  
            </a>
         </li>`
        
        
        
    }
    
    ulEl.innerHTML = listItems
    }


inputBtn.addEventListener("click", function() 
{ 
    myLeads.push(inputEl.value) 
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
}) 

dltbtn.addEventListener("dblclick", function(){
   localStorage.clear()
   myLeads = []
   
   render(myLeads)
})


//always refactor code at end