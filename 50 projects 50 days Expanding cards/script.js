const panels = document.querySelectorAll('.panel'); /*selects all objects this class "panel"*/ 

panels.forEach(panel => { /*checks through the whole list of objects with class panel*/ 
    panel.addEventListener('click', () => { /*when clicked it calls function*/
        removeActiveClasses(); /*calls this function*/
        panel.classList.add('active'); /*adds class panel to the selected object*/
    })
})

function removeActiveClasses(){
    panels.forEach(panel => { /*goes through each of the panels*/
        panel.classList.remove('active');/*removes class selected from the objects in the panels list*/
    })
}