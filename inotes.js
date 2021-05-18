console.log('this is i notes app');
let submitBtn= document.getElementById('submitBtn');
// console.log(submitBtn);
submitBtn.addEventListener("click", function lisnBtn(e) {
    e.preventDefault();
    let addText= document.getElementById('addText');
    // console.log(addText.value);
    let note= localStorage.getItem('notes');
    // console.log(note);
    
    if (addText.value=='') {
        // console.log("first if")
        document.getElementById('addText').style.borderColor='red';
    }
    else if(note==null) {
        // console.log("entered else if");
        noteObj.push(addText.value);
        localStorage.setItem('notes', JSON.stringify(noteObj));
        document.getElementById('addText').style.borderColor='darkgray';
        addText.value='';
    }
    else{
        noteObj= JSON.parse(note);
        // console.log('noteObj');
        
        noteObj.push(addText.value);
        localStorage.setItem('notes', JSON.stringify(noteObj));
        document.getElementById('addText').style.borderColor='darkgray';
        addText.value='';
    }
    showNotes();
    
})
function showNotes() {
   
    let notes= localStorage.getItem('notes');
    let html=''
        if (notes==null) {
            // console.log("entered");
            noteObj=[];
            html=`<h5>Nothing Found Here... add a note above &#8593;<h5>`
        }else if(notes=="[]"){
            // console.log("entered else if");
            html=`<h5>Nothing Found Here... add a note above &#8593;<h5>`
        }
        else{
            noteObj= JSON.parse(notes);
            // console.log(noteObj);
          
            noteObj.forEach(function (e,index) {
             html+=` <div class="card my-4 ml-4" style="width: 18rem;">
             <div class="card-body">
             <h5 class="card-title">Note ${index+1}</h5>
              <p class="card-text">${e}</p>
              <button id="${index}" onclick=deleteBtn(this.id) class="btn btn-primary">Delete</button>
             </div>
           </div>`
             });
        }
                // console.log(html);
                document.getElementById('notes').innerHTML=html;
                console.log("Ready");    
}
function deleteBtn(index) {
    console.log('deleting ',index);
    let notes= localStorage.getItem('notes');
    if (notes==null) {
        noteObj=[];
    }else{
        noteObj= JSON.parse(notes);
        // console.log(noteObj);
    }
    noteObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    showNotes();
}
showNotes();

let search=document.getElementById('searchTxt')
    search.addEventListener('input',function(){
        let querry= search.value.toLowerCase();
        let storedNotes= document.getElementsByClassName('card');
        Array.from(storedNotes).forEach(function(element){
            let note= element.getElementsByTagName('p')[0].innerText;
            note=note.toLowerCase();
            if (note.includes(querry)) {
                element.style.display = "block";
            }else{
                element.style.display = "none";
            }
        })
        
    })


