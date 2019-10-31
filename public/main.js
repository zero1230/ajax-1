

console.log('main.js...')

let n = 2
getPage.onclick=()=>{
    
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n}.json`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            const array=JSON.parse(request.response)
            
            array.forEach(item => {
                const li = document.createElement('li')
                li.innerHTML=item.id
                xxx.appendChild(li)
            });
            n+=1
            console.log(n)
            
        }
    }
    request.send()
}


getJson.onclick=()=>{
    
    const request=new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            let obj
            try {
                obj = JSON.parse(request.response)
            } catch (error) {
                console.log(error)
                obj={"name":"noname"}
            }
            
            myName.textContent=obj.name 
        }
    }
    request.send();
    
}

getXml.onclick=()=>{
    const request=new XMLHttpRequest();//可以省略()
    request.open('GET','/4.xml');
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
           const dom=request.responseXML
           const text=dom.getElementsByTagName('warning')[0].textContent
           console.log(text.trim())
        }
    }
    request.send();
}


getHtml.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/3.html');
    request.onload=()=>{
        const html=document.createElement('html')
        html.innerHTML=request.response
        document.body.appendChild(html)
    }
    request.onerror=()=>{

    }
    request.send()
}


getScript.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/2.js');
    request.onload=()=>{
        const script=document.createElement('script')
        script.innerHTML=request.response
        document.body.appendChild(script)
    }
    request.onerror=()=>{

    }
    request.send()
}



getCSS.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    
    //成功加载
    request.onreadystatechange=()=>{
        // 下载完成，不知道是错误还是正确
        if(request.readyState===4){

            if(request.status>=200 && request.status<300){
                //把style样式添加到head中
                const style = document.createElement('style');
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                alert('css加载错误。。。')
            }
            
        }
        
    }

    request.send();

}

