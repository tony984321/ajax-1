let n = 1;

document.querySelector('#requestCss').onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', 'style.css');

  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        const style = document.createElement('style');

        style.innerHTML = request.response;
        document.body.appendChild(style);
      }else {
        alert('加载css失败')
      }
    }
  };

  request.send();
}

document.querySelector('#requestJs').onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '2.js');

  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        const script = document.createElement('script');

        script.innerHTML = request.response;
        document.body.appendChild(script);
      }else {
        alert('加载js失败')
      }
    }
  };

  request.send();
}

document.querySelector('#requestHtml').onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '1.html');

  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        const div = document.createElement('div');

        div.innerHTML = request.response;
        document.body.appendChild(div);
      }else {
        alert('加载html失败')
      }
    }
  };

  request.send();
}

document.querySelector('#requestXML').onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '3.xml');

  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName('warning')[0].textContent;
        const div = document.createElement('div');

        div.innerText = text;
        document.body.appendChild(div);
      }else {
        alert('加载html失败')
      }
    }
  };

  request.send();
}

document.querySelector('#requestJSON').onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '5.json');

  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        const { name, age, xxx } = JSON.parse(request.response);
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');

        div1.innerText = `Name: ${name}`;
        div2.innerText = `Age: ${age}`;
        document.body.appendChild(div1).appendChild(div2);
      }else {
        alert('加载html失败')
      }
    }
  };

  request.send();
}

document.querySelector('#getNextPage').onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', `page${n + 1}.json`);

  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        const data  = JSON.parse(request.response);
        data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item.id;
          document.querySelector('#container').appendChild(li);
        });
        n += 1;
      }else {
        alert('加载html失败')
      }
    }
  };

  request.send();
}
