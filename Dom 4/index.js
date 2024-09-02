document.querySelector("form").addEventListener("submit",todoList);

    function todoList(){
        event.preventDefault();
        let itemName=document.querySelector("#name").value;
        let quantity=document.querySelector("#qty").value;
        let priority=document.querySelector("#prty").value;
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=itemName;
        let td2=document.createElement("td");
        td2.innerText=quantity;
        let td3=document.createElement("td");
        td3.innerText=priority;
        tr.append(td1,td2,td3);
        let tbody=document.querySelector("tbody");
        tbody.append(tr);
        console.log(tr);
        document.querySelector("#name").value="";
        document.querySelector("#qty").value="";

    }