var center = document.querySelector(".center")
        var second = document.querySelector(".second")

        var count = 1
        function createItem(){
            var p = document.createElement("p")
            p.innerHTML = `This is paragraph p${count}`
            p.id = `p${count}`
            count++;
            second.appendChild(p)
        }

        function deleteItem(id){
            if(second.childNodes.length>1){
                var p = second.childNodes[1]
                second.removeChild(p)
            }
        }

        function deleteAll(){
            if(second.childNodes.length>1){
                center.removeChild(second)
                second = document.createElement("div")
                second.classList.add("second")
                center.appendChild(second)
            }
        }