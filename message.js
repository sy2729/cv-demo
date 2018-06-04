
setTimeout(() => {
    init();
}, 0);



function init() {
    var APP_ID = 'iUAUdmSeizUpHyu2GxiO0txO-gzGzoHsz';
    var APP_KEY = '92mhpDbB13kiEKSswYht11OW';
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY,
    });

    var query = new AV.Query('Message');
    query.find().then(function (results) {
       var message = results.map((i)=>{
        return i.attributes
       })
    let messageList = view.querySelector('.message-list')
    message.forEach((i)=>{
        let li = document.createElement('li');
        li.textContent = i.words;
        messageList.appendChild(li);
    })


    }, function (error) {
        // error is an instance of AVError.
    });
}





let view = document.querySelector('.message-board');


let button = view.querySelector('.leaveMessage');
button.onsubmit = function (e) {
    e.preventDefault();
    var Message = AV.Object.extend('Message');
    var message = new Message();
    var value = view.querySelector('.message-content').value;
    message.save({
        words: value
    }).then(function (object) {
        alert('submit successfully')
        let li = document.createElement('li');
        let messageList = view.querySelector('.message-list')
        li.textContent = view.querySelector('.message-content').value;
        messageList.appendChild(li);
        view.querySelector("input[type='text']").value = '';
    })
}

let controller = {
    
};


let model = {
    list: null,
    getData: ()=>{
        this.list = view.querySelector('.message-list');
    }
};